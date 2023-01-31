const multer = require('multer');
const path = require("path");

const UPLOAD_FOLDER = "public/images/";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, UPLOAD_FOLDER);
    },
    filename: function (req, file, cb) {
      const fileExt = path.extname(file.originalname);
      const fileName = file.originalname.replace(fileExt,"").toLowerCase().split(" ").join("-") + "-" + Date.now()

      cb(null, fileName + fileExt)
    }
  });
  const imageUpload = multer({ 
    storage,
    limits:{
        fileSize: 2000000,
    },
   });

module.exports = {imageUpload}