const User = require("../Models/User");
const Blog = require("../Models/Blog");
const Comment = require("../Models/Comment");

//CREATE A NEW COMMENT
const CreateCommentController = async (req, res) => {
    try{
        const new__comment = await new Comment(req.body)
        const saved__comment = await new__comment.save();
        res.status(200).json(saved__comment);
    }
    catch(err){
        res.status(500).json(err)
    }
}

//UPDATE THIS COMMENT
const UpdateCommentController = async (req, res) => {
    try{
        const updatedComment = Comment.findByIdAndUpdate(req.params.id, {$set:req.body}, {new:true})
        res.status(200).json(updatedComment);
    }
    catch(err){
        res.status(500).json(err);
    }
}

//DELETE THIS COMMENT
const DeleteThisCommentController = async (req, res) => {
    try{
        await Comment.findByIdAndDelete(req.params.id);
        res.status(200).json("This Comment successfully deleted!")
    }
    catch(err){
        res.status(500).json(err)
    }
}

//RELATED POST COMMENTS
const AllCommentsForThisBlog = async (req, res) => {
    try{
        const blog__comments = await Comment.find({blogId: req.params.id})
        res.status(200).json(blog__comments)
    }
    catch(err){
        res.status(500).json(err)
    }
}


//LIKE A COMMENT
const LikeComment = async (req, res) => {
    try{
        const comment = await Comment.findById(req.params.id)
        comment.likes++
        const saved_comment = await comment.save();
        res.status(200).json(saved_comment);
    }
    catch(err){
        res.status(500).json(err)
    }
}

//UNLIKE A COMMENT
const UnlikeComment = async (req, res) => {
    try{
        const comment = await Comment.findById(req.params.id)
        comment.likes--;
        const saved__comment = await comment.save();
        res.status(200).json(saved__comment)
    }
    catch(err){
        res.status(500).json(err)
    }
}

//GET NUMBER OF LIKES
const LikeNumber = async (req, res) => {
    try{
        const comment = await Comment.findById(req.params.id)
        const comment__no = await comment.likes;
        res.status(200).json(comment__no);
    }
    catch(err){
        res.status(500).json(err)
    }
}


exports.CreateCommentController = CreateCommentController;
exports.UpdateCommentController = UpdateCommentController;
exports.DeleteThisCommentController = DeleteThisCommentController;
exports.AllCommentsForThisBlog = AllCommentsForThisBlog;
exports.LikeComment = LikeComment;
exports.UnlikeComment = UnlikeComment;
exports.LikeNumber = LikeNumber;