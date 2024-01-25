const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    price : {
        type: Number,
        required : true
    },
    pid : {
        type: Number,
        required : true,
        unique : true
    }
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;