const express = require("express");
const port = 3000
const app = express();
const bodyParser = require('body-parser');
const cors = require("cors"); 
const connectDB = require('./db');
const mongoose = require('mongoose');
const Product = require('./models/productModel.js');

app.use(express.json());
app.use(cors());
  // Middleware to parse JSON requests
app.use(bodyParser.json());

const users = [ 
  { username: 'john', password: 'password123', id: 1,  },
                { username: 'jane', password: 'password456', id: 2 } 
];


// --------------------MONGODB---------------------------------
connectDB();

const p1 = new Product({
  name: "Viper_ultimate",
  price: 7000,
  pid: 1
});

const p2 = new Product({
  name: "Viper_ultimate_v2",
  price: 10000,
  pid: 2
});

const addProductsToDB = async () => {
  try {
    await p1.save();
    console.log(`${p1.name} added successfully!`);
    await p2.save();
    console.log(`${p2.name} added successfully!`);
  } catch (error) {
    console.error("Error adding products:", error);
  }
};
addProductsToDB();

// -----------------------------ENDS MONGODB----------------------------
// const products = [
//     {
//         "name" : "Razer viper mini",
//         "price": 2000,
//         "pid" : 1
//     },
//     {
//         "name" : "Logitech gpro wireless",
//         "price" : 7000,
//         "pid" : 2
//     },
//     {
//         "name" : "ROG strix g15",
//         "price" : 70000,
//         "pid" : 3
//     }
// ];
  

  
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
app.get("/products",(req,res)=>{
    // res.send(`Server running on port ${port} you are in products list<br> <a href="./">ROOT</a><br><a href="./profile">PROFILE</a><br><a href="./sell">SELL</a>`);
    res.status(200).json(products);
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

app.get('/cart',(req,res)=>{
    
})

app.listen(3000, (req,res)=>{
    console.log("Server started on port 3000");
});



//add email and text field spell checks










app.get("/",(req,res)=>{
    res.send(`Server running on port ${port}<br><a href="./sell">SELL</a><br><a href="./products">PRODUCTS</a><br><a href="./profile">PROFILE</a><br><a href="./">ROOT</a>`);
});

// app.get("/products",(req,res)=>{
//     res.send(`Server running on port ${port} you are in products list<br> <a href="./">ROOT</a><br><a href="./profile">PROFILE</a><br><a href="./sell">SELL</a>`);
// });

app.get("/sell",(req,res)=>{
    res.send(`Server running on port ${port} this is the selling page <br><a href="./profile">PROFILE</a><br><a href="./products">PRODUCTS</a><br><a href="./">ROOT</a>`);
});

app.get("/profile",(req,res)=>{
    res.send(`Server running on port ${port} this is your profile <br><a href="./sell">SELL</a><br><a href="./products">PRODUCTS</a><br><a href="./">ROOT</a>`);
});




