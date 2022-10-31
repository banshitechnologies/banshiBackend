import userModel from "../Models/userModel.js";
import bcrypt from 'bcryptjs';
import { createError } from "../utils/error.js";



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

export const login = ()=>{

}