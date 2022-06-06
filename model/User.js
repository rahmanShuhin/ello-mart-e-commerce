const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  isVerified: {
    type: Boolean,
    default: false,
  },
  emailToken:{
    type: String,
  },
  image: {
    type: String,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
  },
  time: {
    type: Date,
    default: Date.now,
  },
  birthDate: {
    type: Date,
  },
  mobile: {
    type : Number,
  },
  gender: {
    type : String 
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
