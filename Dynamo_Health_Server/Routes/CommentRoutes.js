const express = require("express");
const CommentController = require("../Controllers/CommentController");

const router = express.Router();

router.post("/createcomment", CommentController.CreateCommentController );
router.put("/editcomment/:id", CommentController.UpdateCommentController);
router.delete("/deletecomment/:id", CommentController.DeleteThisCommentController);
router.get("/blogcomment/:id", CommentController.AllCommentsForThisBlog);
router.post("/blogcomment/like/:id", CommentController.LikeComment)
router.post("/blogcomment/unlike/:id", CommentController.UnlikeComment);
router.get("/blogcomment/likes/:id", CommentController.LikeNumber);

module.exports = router;