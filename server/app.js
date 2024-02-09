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

dotenv.config();//environment variable initialise
app.use(express.json());//json parser
app.use(cors());//cross origin resource server
const Port = process.env.PORT;
app.use(bodyParser.json()); // Middleware to parse JSON requests

const users = [
  { name: 'john', eMail: 'abc@gmail.com', password: 'password123', cart: [], wishlist: [] },
];//user schema
// ---------------------------------------------------------------------------

// --------------------MONGODB---------------------------------
connectDB();
// -----------------------------ENDS MONGODB----------------------------
// Login endpoint
app.post('/login', (req, res) => {
  const { username, password } = req.body;
  // Check if username and password are provided
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  // Check if the user exists
  const user = users.find((u) => u.username === username && u.password === password);
  if (!user) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // In a real-world scenario, you might generate a token here and send it to the client
  res.json({ message: 'Login successful', userId: user.id });
});


// ------------------------------------Signup------------------------- 
const addUserToDB = async (u) => {
  try {
    await u.save();
    console.log(`${u.name} added successfully!`);
  } catch (error) {
    console.error("Error adding User:", error);
  }
};

app.post('/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !password || !email) {
    return res.status(400).json({ error: 'Enter Complete Details' });
  }

  const user = new User({ "name": name, "email": email, "password": password })
  await addUserToDB(user);
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
    console.log("fetched product", ele.title);
    result.push(ele);
  });
  // console.log(productsData[0].title);
  console.log("success")
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
  console.log(req.params);
  try {
    const uid = req.params.uid;
    const pid = req.params.pid;

    // Find the user by uid
    const user = await User.findOne({'_id':uid});

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













// app.get("/",(req,res)=>{
//     res.send(`Server running on port ${port}<br><a href="./sell">SELL</a><br><a href="./products">PRODUCTS</a><br><a href="./profile">PROFILE</a><br><a href="./">ROOT</a>`);
// });

// app.get("/products",(req,res)=>{
//     res.send(`Server running on port ${port} you are in products list<br> <a href="./">ROOT</a><br><a href="./profile">PROFILE</a><br><a href="./sell">SELL</a>`);
// });

// app.get("/sell",(req,res)=>{
//     res.send(`Server running on port ${port} this is the selling page <br><a href="./profile">PROFILE</a><br><a href="./products">PRODUCTS</a><br><a href="./">ROOT</a>`);
// });

// app.get("/profile",(req,res)=>{
//     res.send(`Server running on port ${port} this is your profile <br><a href="./sell">SELL</a><br><a href="./products">PRODUCTS</a><br><a href="./">ROOT</a>`);
// });




