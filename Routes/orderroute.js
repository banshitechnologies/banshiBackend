import Express from "express";
import { doOrder, getAllOrder, getallorderbyuserid } from "../Controllers/ordercontroller";
import main from '../utils/sendmail.js';
import verifytoken from '../utils/verifytoken.js'
const router = Express.Router();

router.post('/order',upload.fields([{name:'logo',maxCount:1},{name:'image',maxCount:5}]),verifytoken,main,doOrder);
router.get('/getallorders',verifytoken,getAllOrder);
router.get('/getallorder/:userid',verifytoken,getallorderbyuserid);



export default router;