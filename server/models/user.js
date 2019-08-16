const mongoose = require('mongoose');

const Schema  = mongoose.Schema

const userScema = new Schema({
    email:String,
    password:String
})
module.exports = mongoose.model('user',userScema,'users')