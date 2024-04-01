const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const user__router = require("./Routes/UserRoutes");
// const blog__router = require("./Routes/BlogRoutes");
// const comment__router = require("./Routes/CommentRoutes");
const cors = require("cors")
const cookieParser = require("cookie-parser");
const fs = require("fs")

//Application Middlewares
const application = express(); 
dotenv.config();
application.use(express.json());
application.use(cookieParser());
application.use("/uploads", express.static(__dirname+"/uploads"));

// application.use(cors({
//     origin:"http://localhost:5173",
//     credentials: true
// }))

const PORT = process.env.PORT || 8000

//Application Endpoints
application.get("/", async (req, res) => {
    res.send("Express API for Dynamo Health")
})

application.get("/api", async (req, res) => {
    res.send("Express API for Dynamo Health Together")
})
application.use("/api/user", user__router);
// application.use("/api/blog", blog__router);
// application.use("/api/comment", comment__router);


//Database Connection and Server Start
application.listen(PORT, async () => {
    await mongoose.connect(process.env.MONGO_URL).then(() => {
        console.log(`Database has been connected and application runs at port ${PORT}`)
    }).catch((err) => {
        console.log(err)
    })
})