const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    commentWriteUp:{
        type: String,
        required: true,
    },
    blogId:{
        type: String,
        required: true
    },
    authorId: {
        type: String,
        required: true
    },
    likes:{
        type: Number,
        default:0
    },
},{
    timestamps:true
})

module.exports = mongoose.model("Comment", CommentSchema);