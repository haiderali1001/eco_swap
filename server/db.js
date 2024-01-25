const mongoose = require('mongoose');

const connectDB = async () => {
    try {
      const conn = await mongoose.connect(`mongodb+srv://haiderali1001haider:Tb5PPrSEk5MXtb5A@cluster0.yfwdetw.mongodb.net/?retryWrites=true&w=majority`
        // `mongodb://127.0.0.1:27017/Ecoswap`
      , {
        useNewUrlParser: true,
      });
      console.log(`MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
      console.error(error.message);
      process.exit(1);
    }
  }

  module.exports = connectDB;