import  Express  from "express";
import { login, register } from "../Controllers/authCOntroller.js";


const route = Express.Router();

route.post('/register',register);
route.post('/login',login);

export default route;