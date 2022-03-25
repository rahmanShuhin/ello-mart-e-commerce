const Product = require("../model/Product");
const verification = require("../middlewares/isAdminValidators");
const AppError = require("../utils/appError");
const mongoose = require("mongoose");
const ApiFeatures = require("../utils/apiFeatures");
module.exports = {
  //---------get all products----------
  async getProducts(req, res, next) {
    try {
      const resultPerPage = req.query.perPage || 5;
      const apiFeature = new ApiFeatures(Product.find(), req.query)
        .search()
        .filter()
        .pagination(resultPerPage);

      const products = await apiFeature.query;
      res.status(200).json({
        success: true,
        products,
      });
      // await apiFeature.query.then(function (data) {
      //   res.status(200).send(data);
      // });
    } catch (error) {
      return next(new AppError(error, 400));
    }
  },
  //---------get single product by id----------
  async getOneProduct(req, res, next) {
    try {
      const isValidId = mongoose.Types.ObjectId.isValid(req.params.id);
      //check for is it valid mongoose _id
      if (!isValidId) {
        return next(new AppError("Product Not Found", 404));
      }
      //find the product
      const product = await Product.findById(req.params.id);

      if (!product) {
        return next(new AppError("Product Not Found", 404));
      }
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      return next(new AppError(error.message, 400));
    }
  },
  //----------create product----------
  async postProduct(req, res, next) {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      return next(new AppError(error.message, 400));
      console.log(error);
    }
  },
  //-------------update product--------------
  async updateProduct(req, res, next) {
    try {
      let product = await Product.findByIdAndUpdate(req.params.id);
      // if product is not found
      if (!product) {
        return next(new AppError("Product Not Found", 404));
      }
      //if product is available for update
      product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false,
      });
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      return next(new AppError(error.message, 400));
      console.log(error.message);
    }
  },

  //------------------delete a product--------------
  async deleteProduct(req, res, next) {
    try {
      let product = await Product.findById(req.params.id);
      // if product is not found
      if (!product) {
        return next(new AppError("Product Not Found", 404));
      }
      //remove product id available
      await product.remove();
      res.status(200).json({
        success: true,
        message: "Product Remove Successfully",
      });
    } catch (error) {
      return next(new AppError(error.message, 400));
      console.log(error.message);
    }
  },
};
