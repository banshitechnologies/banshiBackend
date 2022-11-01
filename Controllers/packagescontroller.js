import packagesmodel from "../Models/packagesmodel.js";
import { createError } from "../utils/error.js";

//  Add packages controller
export const addpackage = async(req,res,next)=>{
    try {
        const newpackage = new packagesmodel({
            packagetitle: req.body.packagetitle,
            packagebody: []
        })
        await newpackage.save();
        res.status(200).send('Package created');
    } catch (error) {
        return next(createError(300,error));
    }
}

// Get all packages controller

export const getallpackage = async (req,res,next)=>{
    try {
        const packages =await packagesmodel.find();
        res.status(200).json(packages);
    } catch (error) {
        return next(createError(300,error));
    }
}

// get all packages by title controller

export const getpackagebytitle = async(req,res,next)=>{
   try {
    const packagetitle = await packagesmodel.findOne({packagetitle: req.body.packagetitle});
    res.status(200).json(packagetitle);
   } catch (error) {
    return next(createError(300,error));
   }
}

// Add Package body controller

export const addpackagebody = async(req,res,next)=>{
   try {
    const {packagetitle,...others} = req.body
    const newpackagebody =await packagesmodel.findOneAndUpdate({packagetitle: packagetitle},{"$push":{"packagebody":others}}); 
    res.status(200).json(newpackagebody);
   } catch (error) {
    return next(createError(200,error));
   }
}