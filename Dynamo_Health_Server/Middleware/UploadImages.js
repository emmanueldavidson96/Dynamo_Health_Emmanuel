const multer = require("multer");

const uploadImages = multer({dest:"uploads/"});

module.exports = uploadImages;