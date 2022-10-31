import userModel from "../Models/userModel.js";
import bcrypt from 'bcryptjs';
import { createError } from "../utils/error.js";
import jwt from 'jsonwebtoken';



// Register Controller
export const register = async(req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password, salt);
        const newUser = new userModel({
            ...req.body,
            password:hash
        });
        await newUser.save();
        res.status(200).json({"message":true});
    } catch (error) {
        console.log(error);
    }
}

// Login Controller

export const login = async(req,res,next)=>{
    try {
        console.log(req.body);
        const userlogin = await userModel.findOne({username: req.body.username});
        console.log(userlogin._doc);
    if (!userlogin) {
        return next(createError(200,"user Not Found"))
    }
    const iscorrectpassword =await bcrypt.compare(
        req.body.password,
        userlogin.password
    )

    if (!iscorrectpassword) {
        return next(createError(200,"UserId OR password Not Valid"))
    }
    console.log("pass ok");
    const token = jwt.sign(
        { id: userlogin._id, isAdmin: userlogin.isAdmin },
        process.env.JWT
      );
      const { password, isAdmin, ...otherDetails } = userlogin._doc;
      res.cookie("user", token)
        .status(200)
        .json({ details: { ...otherDetails }, isAdmin });
    } catch (error) {
       return next(createError(300,error));
    }
}

// Start Logout Controller

export const logout = (req,res,next)=>{
    try {
        res.clearCookie('user');
    res.status(200).json({"message":"User log out successfully"});
    } catch (error) {
        return next(createError(200,error));
    }
}