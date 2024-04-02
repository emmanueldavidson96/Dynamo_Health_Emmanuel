const User = require("../Models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const RegisterUser = async (req, res) => {
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hashSync(req.body.password, salt)
        const new__user = new User({email:req.body.email,username:req.body.username, password:hashedPassword})
        const saved__user = await new__user.save()
        res.status(200).json(saved__user);
    }
    catch(err){
        res.status(500).json(err);
    }
}

//LoginUser
const LoginUser = async (req, res) => {
    try{
        const user = await User.findOne({email:req.body.email})
        if(!user){
            return res.status(404).json("User not found!")
        }
        const passTest = await bcrypt.compareSync(req.body.password, user.password)
        if(!passTest){
            res.status(401).json("Incorrect Credentials")
        }
        const token = jwt.sign(
            {
                _id:user._id,
                username: user.username,
                email: user.email
            },
            process.env.SECRET,
            {
                expiresIn: "3h"
            }
        )
        res.cookie("token", token).status(200).json(user);
        // res.status(200).json(user)
    }
    catch(err){
        res.status(500).json(err)
    }
}



//GET CURRENT LOGGED IN USER
const CurrentLoggedInUserController = async (req, res) => {
    const token = req.cookies.token;
    if(token == null){
        return res.status(401).send('Unauthorised');
    }
    jwt.verify(token,process.env.SECRET, {}, async (err, data) => {
        if(err){
            return res.status(404).json(err)
        }
        res.status(200).json(data)
    })
}

//GET USER INFORMATION
const UserInformation = async (req, res) => {
    const id = req.params.id;
    try{
        const user__info = await User.findById(id)
        res.status(200).json(user__info)
    }
    catch(err){
        res.status(500).json(err)
    }
}

exports.RegisterUser = RegisterUser;
exports.LoginUser = LoginUser;
exports.CurrentLoggedInUserController = CurrentLoggedInUserController;
exports.UserInformation = UserInformation;