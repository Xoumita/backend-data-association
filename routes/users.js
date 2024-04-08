var express = require('express');
var router = express.Router();
const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/user-post")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  dp: {
    type: String // You can adjust the type as per your requirement (String for file paths, or Buffer for storing files directly)
  },
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }]
});

module.exports = mongoose.model('User', userSchema);