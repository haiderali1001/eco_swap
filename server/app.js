const express = require("express");
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors"); 
const connectDB = require('./db');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const Product = require('./models/productModel.js');
const Products = require('./products.json');//IMPORT PRODUCTS LIST AND ADD TO MONGODB
const User = require('./models./userModel.js');

dotenv.config();//environment variable initialise
app.use(express.json());//json parser
app.use(cors());//cross origin resource server
const Port = process.env.PORT;
app.use(bodyParser.json()); // Middleware to parse JSON requests

const users = [ 
  { name: 'john',eMail:'abc@gmail.com', password: 'password123', cart:[]  },
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


 //Signup 
app.post('/signup', (req,res)=>{
    const {username, password} = req.body;
    if (!username || !password) {
        return res.status(400).json({ error: 'Enter Complete Details' });
      }
    const id = users.length+1;
    const details = {"username": username, "password": password, "id":id};
    users.push(details);
    return res.status(200).json({success: `You have succesfully registered. Your id is ${id}`});
  })

  //Products list
app.get("/products", async (req,res)=>{
    // res.send(`Server running on port ${port} you are in products list<br> <a href="./">ROOT</a><br><a href="./profile">PROFILE</a><br><a href="./sell">SELL</a>`);
    
    const productsData = await Product.find();
    let result = [];
    productsData.map( ele => {
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
app.delete("/products/:pid",(req,res)=>{
    const productId = parseInt(req.params.pid);
    const index = products.findIndex(product => product.pid === productId);
    if (index !== -1) {
        products.splice(index, 1);
        res.status(200).json({ message: 'Product deleted successfully' });
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
})

//Change pricing of product
app.patch("/products/:pid", (req,res)=>{
    const productId = parseInt(req.params.pid);
    const product = products.find(product => product.pid === productId);
    const newPrice = parseInt(req.body.price);
    if (product) {
        product.price = newPrice;
        res.json({ message: 'Product price updated successfully', product });
      } else {
        res.status(404).json({ error: 'Product not found' });
      }
})

app.get('/',(req,res)=>{
  console.log("server running succesfully")
  res.status(200);
    
})

app.get('/healthcheck', (req,res)=>{
  res.status(204).json({status:'successful'});
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




