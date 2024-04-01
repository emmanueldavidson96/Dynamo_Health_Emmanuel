const express = require("express");
const BlogController = require("../Controllers/BlogController");

const router = express.Router();

router.post("/createblog", BlogController.CreateBlogController)
router.put("/editpost/:id", BlogController.UpdatedABlogController);
router.get("/blogs", BlogController.GetAllPostBlogs);
router.get("/blog/:id", BlogController.GetABlogInfo);
router.delete("/blog/:id", BlogController.DeleteABlogController);

module.exports = router;