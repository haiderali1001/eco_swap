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

  // `mongodb+srv://haiderali1001haider:Tb5PPrSEk5MXtb5A@cluster0.yfwdetw.mongodb.net/?retryWrites=true&w=majority`
        // `mongodb://127.0.0.1:27017/Ecoswap`