const express = require("express");
const UserController = require("../Controllers/UserController");

const router = express.Router()

router.post("/registeruser", UserController.RegisterUser);
router.post("/loginuser", UserController.LoginUser)
router.get("/currentloggeduser", UserController.CurrentLoggedInUserController);
router.get("/getuserinfo/:id", UserController.UserInformation)
// {
//     "version": 2,
//     "builds":[
//         {"src":"index.js", "use":"@vercel/node"}
//     ],
//     "routes": [
//         {
//             "src": "/(.*)",
//             "dest":"index.js"
//         }
//     ]
// }
module.exports = router
