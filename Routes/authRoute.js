import  Express  from "express";
import { register } from "../Controllers/authCOntroller.js";


const route = Express.Router();

route.post('/register',register);

export default route;