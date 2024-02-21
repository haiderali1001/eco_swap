const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors");
const connectDB = require('./db');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel.js');//product schema import
const Products = require('./products.json');//IMPORT PRODUCTS LIST AND ADD TO MONGODB
const User = require('./models/userModel.js');//user schema import
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require('cookie-parser')

dotenv.config();//environment variable initialise
app.use(express.json());//json parser
app.use(cors());//cross origin resource server
const Port = process.env.PORT;
app.use(bodyParser.json()); // Middleware to parse JSON requests
app.use(cookieParser());

const SECRET = process.env.SECRET;

const users = [
  { name: 'john', eMail: 'abc@gmail.com', password: 'password123', cart: [], wishlist: [] },
];//user schema
// ---------------------------------------------------------------------------

// --------------------MONGODB---------------------------------
connectDB();
// -----------------------------ENDS MONGODB----------------------------
//----------------------login endpoint with token-----------------
app.post('/logintoken', async (req, res) => {
  //check if token is there or not
  const { logintoken } = req.body;
  // console.log("hi m hu login k token "+logintoken)
  if (logintoken != "null") {

    jwt.verify(logintoken, SECRET, async (err, decodedToken) => {
      if (err) {
        return res.status(401).json({
          error: err.name,
          message: "unauthorised access: " + err.message,
          relogin: true,
          valid: false
        })
      }
      const useridFromToken = decodedToken.id;
      const userFromToken = await User.findById(useridFromToken);
      if (!userFromToken) {
        return res.status(401).json({ "status": "Login credentials expired" });
      }
      return res.status(200).json({
        success: true,
        token: logintoken,
        userid: userFromToken._id,
        username: userFromToken.name,
        cart: userFromToken.cart,
        email: userFromToken.email
      });
    })
  }
})
// --------------login end point with userdetails
// Login endpoint
app.post('/login', async (req, res) => {

  //get data from body
  const { email, password } = req.body;
  // Check if username and password are provided
  if (!email || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  // Check if the user exists
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  //compare password

  if (user && (await bcrypt.compare(password, user.password))) {
    const token = jwt.sign(
      { id: user._id, email: email },
      SECRET,
      { expiresIn: '2h' }
    );

    user.token = token;
    user.password = undefined;
    //cookie section
    const options = {
      expires: new Date(Date.now() + 36 * 60 * 60 * 1000),
      httpOnly: true
    };

    //send token to user
    res.status(200).cookie("token", token, options).json({ success: true, token, userid: user._id, username: user.name, cart: user.cart, email: email });
  }
  else {
    res.status(401).json({ error: "Wrong password" });
  }
});
// ------------------------------------Signup------------------------- 
// const addUserToDB = async (u) => {
//   try {
//     await u.save();
//     console.log(`${u.name} added successfully!`);
//   } catch (error) {
//     console.error("Error adding User:", error);
//   }
// };
//user signup
app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !password || !email) {
    return res.status(400).json({ error: 'Enter Complete Details' });
  }
  //user exists or not
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(404).send({ failure: 'User already exists' });
    return;
  }
  //encryption of password
  const encPassword = await bcrypt.hash(password, 10);

  //saving user to database
  const user = await User.create({ "name": name, "email": email, "password": encPassword })
  // await addUserToDB(user);

  //generate token
  const token = jwt.sign(
    { id: user._id, email: email },
    SECRET,
    {
      expiresIn: '2h'
    }
  );
  user.token = token;
  user.password = undefined;

  return res.status(200).json({ success: `You have succesfully registered. Your email is ${email}` });
})

//Products list
app.get("/products", async (req, res) => {
  // res.send(`Server running on port ${port} you are in products list<br> <a href="./">ROOT</a><br><a href="./profile">PROFILE</a><br><a href="./sell">SELL</a>`);

  const productsData = await Product.find();
  let result = [];
  productsData.map(ele => {
    // if(ele.subcategory == "Chargers" || ele.subcategory == "Laptop"){
    //   result.push(ele);
    // }
    // console.log("fetched product", ele.title);
    result.push(ele);
  });
  // console.log(productsData[0].title);
  res.status(200).json(result);
});


//Delete a product
app.delete("/products/:pid", (req, res) => {
  const productId = parseInt(req.params.pid);
  const index = products.findIndex(product => product.pid === productId);
  if (index !== -1) {
    products.splice(index, 1);
    res.status(200).json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
})

//add to cart
app.patch("/products/:pid/:uid", async (req, res) => {
  // console.log(req.params);
  try {
    const uid = req.params.uid;
    const pid = req.params.pid;

    // Find the user by uid
    const user = await User.findOne({ '_id': uid });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Push the pid into the user's cart array
    user.cart.push(pid);

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: `Product added to cart successfully ${user.name}` });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
//remove from cart
app.patch("/productsrem/:pid/:uid", async (req, res) => {
  // console.log(req.params);
  try {
    const uid = req.params.uid;
    const pid = req.params.pid;

    // Find the user by uid
    const user = await User.findOne({ '_id': uid });

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    // Remove pid from the user's cart array
    // user.cart.push(pid);
    let index = user.cart.indexOf(pid);
        if (index !== -1) {
          user.cart.splice(index, 1);
        }

    // Save the updated user document
    await user.save();

    res.status(200).json({ message: `Product removed from cart successfully ${user.name}` });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
// const productId = req.params.pid;
// const product = await Product.find(product => product._id === productId).catch(err => {console.log(err)});
// console.log("hi");
// if(product){
//   const userId = req.params.uid;
//   const user = User.find(user => {user._id === userId}).catch(err => {console.log(err)});
//   user.cart.push(productId);
//   res.status(200).json({success: `product added to cart ${product.title} of user ${user.name}`});
// }
// else{
//   res.status(404).json({error:"product not found "});
// }



//Change pricing of product
//price updation call
app.patch("/products/:pid", (req, res) => {
  const productId = parseInt(req.params.pid);
  const product = Product.find(product => product._id === productId);
  const newPrice = parseInt(req.body.price);
  if (product) {
    product.price = newPrice;
    res.json({ message: 'Product price updated successfully', product });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
})

app.get('/', (req, res) => {
  console.log("server running succesfully")
  res.status(200);

})

app.get('/healthcheck', (req, res) => {
  res.status(204).json({ status: 'successful' });
})

app.listen(Port, () => {
  console.log(`Listening on http://localhost:${Port}`);
});