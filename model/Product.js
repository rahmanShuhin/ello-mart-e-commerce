const mongoose = require("mongoose");
const { Schema } = mongoose;

const productSchema = new Schema({
  title: {
    type: String,
    required: [true, "Please Enter Product Name"],
    trim: true,
  },
  description: {
    type: String,
    required: [true, "Please Enter Product Description"],
  },
  price: {
    type: Number,
    required: [true, "Please Enter Product Price"],
    maxlength: [6, "Price Cannot exceed 8 characters"],
  },
  rating: {
    type: Number,
    default: 0,
  },
  images: [
    {
      public_id: {
        type: String,
        required: true,
      },
      url: {
        type: String,
        required: true,
      },
    },
  ],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
    trim: true,
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxlength: [4, "Stock Cannot exceed 4 characters"],
    default: 1,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
  discount: {
    type: Number,
  },
  reviews: [
    {
      name: {
        type: String,
      },
      rating: {
        type: Number,
      },
      comment: {
        type: String,
      },
    },
  ],
  sizes: [
    {
      size: {
        type: String,
        trim: true,
      },
    },
  ],
  colors: [
    {
      color: {
        type: String,
        trim: true,
      },
    },
  ],

  time: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
