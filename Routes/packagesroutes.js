import Express  from "express";
import { addpackage, addpackagebody, getallpackage, getpackagebytitle } from "../Controllers/packagescontroller.js";
import { verifytoken } from "../utils/verifytoken.js";

const router = Express.Router();

router.post('/addpackages',verifytoken,addpackage);
router.get('/getallpackages',verifytoken,getallpackage);
router.get('/getallpackagebytitle',verifytoken,getpackagebytitle);
router.put('/addpackagebody',verifytoken,addpackagebody);


export default router;


