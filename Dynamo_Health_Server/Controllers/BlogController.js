const Blog = require("../Models/Blog");
const jwt = require("jsonwebtoken");


//CREATE NEW BLOG
const CreateBlogController = async (req, res) => {   
    const {token} = req.cookies;
    jwt.verify(token,process.env.SECRET, {}, async (err, data) => {
        if (err) throw err;
        // const {
        //     blogContent,
        //     blogSummary,
        //     blogTitle,
        //     blogAuthor,
        //     blogCategories,        
        // } = req.body

        // const newBlog = new Blog({
        //     blogContent,
        //     blogSummary,
        //     blogTitle,
        //     featureImage:newPath,
        //     blogAuthor,
        //     blogCategories
        // })
        const newBlog = new Blog(req.body)
        const saved__newblog = await newBlog.save()
        res.status(200).json(saved__newblog);
    })
    
}

//UPDATE A BLOG INFORMATION
const UpdatedABlogController = async (req, res) => {
    try{
        const this__updated__blog = await Blog.findByIdAndUpdate(req.params.id,{$set:req.body}, {new:true})
        res.status(200).json(this__updated__blog);
    }
    catch(err){
        res.status(500).json(err)
    }
}

//DELETE A BLOG INFORMATION

const DeleteABlogController = async (req, res) => {
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.status(200).json("Blog successfully deleted!")
    }
    catch(err){
        res.status(500).json(err);
    }
}

//GET ALL BLOGS

const GetAllPostBlogs = async (req, res) => {
    try{
        const all__blogs = await Blog.find();
        res.status(200).json(all__blogs);
    }
    catch(err){
        res.status(500).json(err)
    }
}

//GET A BLOG INFORMATION
const GetABlogInfo = async (req, res) => {
    try{
        const this__blog__info = await Blog.findById(req.params.id);
        res.status(200).json(this__blog__info);
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.CreateBlogController = CreateBlogController;
exports.UpdatedABlogController = UpdatedABlogController;
exports.DeleteABlogController = DeleteABlogController;
exports.GetAllPostBlogs = GetAllPostBlogs;
exports.GetABlogInfo = GetABlogInfo;
