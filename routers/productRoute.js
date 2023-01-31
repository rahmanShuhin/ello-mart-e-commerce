const router = require("express").Router();
const upload = require("../middlewares/uploadImage")
const {
  getProducts,
  postProduct,
  updateProduct,
  deleteProduct,
  getOneProduct,
} = require("../controllers/productsController");
const verification = require("../middlewares/isAdminValidators");
//localhost:4000/api/products
router.get("/api/products/", getProducts);

//localhost:4000/api/products---single
router.get("/api/products/:id", getOneProduct);

//localhost:4000/api/products:------post product-------admin only
router.post("/api/products/",upload.imageUpload.array('images', 4),postProduct);

//localhost:4000/api/products:------update a product-------admin only
router.put("/api/products/:id", verification, updateProduct);

//localhost:4000/api/products:------delete a product-------admin only
router.delete("/api/products/:id", verification, deleteProduct);

module.exports = router;
