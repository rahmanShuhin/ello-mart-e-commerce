const Product = require("../model/Product");
const verification = require("../validators/isAdmin");

module.exports = {
  //---------get all products----------
  async getProducts(req, res) {
    try {
      await Product.find({}).then(function (data) {
        res.status(200).send(data);
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  //---------get single product by id----------
  async getOneProduct(req, res) {
    try {
      const product = await Product.findById(req.params.id);
      if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
      }
      res.status(200).json({
        success: true,
        product,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
    }
  },
  //----------create product----------
  async postProduct(req, res) {
    try {
      const product = await Product.create(req.body);
      res.status(201).json({
        success: true,
        product,
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
      console.log(error);
    }
  },
  //-------------update product--------------
  async updateProduct(req, res) {
    try {
      let product = await Product.findByIdAndUpdate(req.params.id);
      // if product is not found
      if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
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
      return res.status(400).json({
        success: false,
        message: error.message,
      });
      console.log(error.message);
    }
  },

  //------------------delete a product--------------
  async deleteProduct(req, res) {
    try {
      let product = await Product.findById(req.params.id);
      // if product is not found
      if (!product) {
        return res.status(500).json({
          success: false,
          message: "Product not found",
        });
      }
      //remove product id available
      await product.remove();
      res.status(200).json({
        success: true,
        message: "Product Remove Successfully",
      });
    } catch (error) {
      return res.status(400).json({
        success: false,
        message: error.message,
      });
      console.log(error.message);
    }
  },
};
