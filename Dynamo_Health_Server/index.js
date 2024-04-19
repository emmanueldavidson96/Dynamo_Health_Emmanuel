const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user__router = require("./Routes/UserRoutes");
const blog__router = require("./Routes/BlogRoutes");
const comment__router = require("./Routes/CommentRoutes");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const path = require("path");
const multer = require("multer");

//Application Middlewares
const application = express(); 
dotenv.config();
application.use(express.json());
application.use(cookieParser());
application.use(cors({
    origin:["https://dynamo-health.vercel.app","https://dynamo-health.vercel.app/createnewblogpost", "https://dynamo-health.vercel.app/register", "https://dynamo-health.vercel.app/login", "https://dynamo-health.vercel.app/admindashboard", "https://dynamo-health.vercel.app/blogcontent/:id", "https://dynamo-health.vercel.app/editcontent","https://dynamo-health.vercel.app/updateThisBlogInfo/:id"],
    methods: ['GET', 'PUT', 'UPDATE', 'DELETE', 'PATCH'],
    credentials: true
}))
application.use("/uploads", express.static(path.join(__dirname,"/uploads")));
const storage = multer.diskStorage({
    destination:(req, file,fn) => {
        fn(null, "uploads")
    },
    filename:(req, file,fn)=> {
        fn(null, req.body.img)
    }
})
const upload = multer({storage:storage})

//PORT
const PORT = process.env.PORT || 8000

//Application Endpoints
application.get("/", async (req, res) => {
    res.send("Express API for Dynamo Health")
})
application.get("/api", async (req, res) => {
    res.send("Express API for Dynamo Health Together API")
})
application.use("/api/user", user__router);
application.use("/api/blog", blog__router);
application.use("/api/comment", comment__router);
// application

//MIDDLEWARE
application.post("/api/upload",upload.single("file"),(req,res)=>{
    // console.log(req.body)
    res.status(200).json("Image has been uploaded successfully!")
})

//Database Connection and Server Start
application.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`Database has been connected and application runs at port ${PORT}`)
    }).catch((err) => {
        console.log(err)
    })
})