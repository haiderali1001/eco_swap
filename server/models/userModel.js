const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name : {
        type: String,
        required : true
    },
    eMail :{
        type : String,
        required : true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    cart: {
        type: Array
    }}, {timestamps: true});

const User = mongoose.model("User", userSchema);
module.exports = User;










