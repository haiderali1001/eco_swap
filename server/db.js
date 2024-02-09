const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true, useUnifiedTopology: true});
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;

        // `mongodb://127.0.0.1:27017/Ecoswap`
// ----------------------------------------------------------------------------
// -------------------------adding product api call---------------------
//--------------------------------------------------------------------------------

        //  PRODUCT SCHEMA
// const p1 = new Product({
//   "title": "Xiaomi 12 Pro",
//   "description": "The Xiaomi 12 Pro is Xiaomi's latest flagship smartphone, with a large 6.7-inch AMOLED display, a triple-lens rear camera system with a 50MP main sensor, and the new Snapdragon 8 Gen 1 chip. It also has a fast-charging battery and a sleek design.",
//   "price": 41199,
//   "category": "furniture",
//   "subcategory": "Smartphone",
//   "outOfStock": false,
//   "image": "https://github.com/AbhiK002/gismos/assets/68178267/13f2e192-cb9f-49cc-9d73-e8cb308ac9cb" 
// });

// const addProductsToDB = async (p) => {
//   try {
//     await p.save();
//     console.log(`${p.title} added successfully!`);
//   } catch (error) {
//     console.error("Error adding products:", error);
//   }
// };

// Products.products.forEach((product) => {
//   const p = new Product(product);
//   addProductsToDB(p);
// });