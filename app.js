import  Express  from "express";
import Razorpay from 'razorpay'
import mongoose from "mongoose";
import dotenv from 'dotenv';
import cors from "cors";
import authRoute from './Routes/authRoute.js';
import packageroute from './Routes/packagesroutes.js';
import cookieParser from "cookie-parser";
const app = Express();
dotenv.config();
const port = 5000;
app.use(Express.json());
app.use(cors());
app.use(Express.urlencoded({ extended: true }));
app.use(cookieParser());
// DB connection
const connect = async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Database Connected");
    } catch (error) {
        console.log(error);
    }
}

// Razor pay instance

export const instance = new Razorpay({
    key_id: process.env.RAZORPAY_API_KEY,
    key_secret: process.env.RAZORPAY_SECRET_KEY
  });

// Disconnected Message Mongodb
mongoose.connection.on("disconnected", () => {
    console.log("mongoDB disconnected!");
  });


// Creating Root Routing
app.use('/api/auth',authRoute);
app.use('/api/packages',packageroute);

// connecting to server
app.listen(port,()=>{
    console.log("Connected server");
    connect();
})
