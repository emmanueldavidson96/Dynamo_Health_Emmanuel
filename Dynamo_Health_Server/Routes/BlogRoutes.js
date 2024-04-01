const express = require("express");
const uploadImages = require("../Middleware/UploadImages");
const BlogController = require("../Controllers/BlogController");

const router = express.Router();

router.post("/createblog", uploadImages.single("file"), BlogController.CreateBlogController)
router.put("/editpost/:id", uploadImages.single("file"), BlogController.UpdatedABlogController);
router.get("/blogs", BlogController.GetAllPostBlogs);
router.get("/blog/:id", BlogController.GetABlogInfo);
router.delete("/blog/:id", BlogController.DeleteABlogController);

module.exports = router;