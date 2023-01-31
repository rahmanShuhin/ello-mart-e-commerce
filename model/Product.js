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
  images: [String],
  category: {
    type: String,
    required: [true, "Please Enter Product Category"],
    trim: true,
  },
  subCategory: {
    type: String,
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Product Stock"],
    maxLength: [4, "Stock Cannot exceed 4 characters"],
    default: 1,
  },
  totalReviews: {
    type: Number,
    default: 0,
  },
  discount: {
    type: String,
  },
  sku: {
    type: String,
    required: true,
    unique:true
  },
  productType: {
    type: String,
    required: true,
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
  sizes: [String],
  colors: {
    type: String,
  },

  time: {
    type: Date,
    default: Date.now,
  },
});

const Product = mongoose.model("Product", productSchema);
module.exports = Product;
