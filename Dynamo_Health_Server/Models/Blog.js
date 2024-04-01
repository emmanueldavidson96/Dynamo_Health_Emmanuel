const mongoose = require("mongoose");

const Schema = mongoose.Schema

const blogSchema = new Schema({
    blogContent:{
        type: String,
        required: true
    },
    blogSummary:{
        type: String,
        required: true
    },
    blogTitle:{
        type: String,
        required: true,
    },
    featureImage:{
        type: String,
        required: true
    },
    blogAuthor:{
        type: String,
        required: true
    },
    blogCategories:{
        type: Array,
        required: true
    }
}, {
    timestamps: true
})

module.exports = mongoose.model("Blog", blogSchema);
