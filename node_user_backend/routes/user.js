import express from "express";
import {sign_upmodel , signup_dataquery} from "../model/sign_upmodel.js";
import {sign_inmodel} from "../model/sign_inmodel.js";
import {sign_outmodel} from "../model/sign_outmodel.js";

const router = express.Router();

router.post('/signup',async (req,res)=>{
    try {
        await sign_upmodel(req.body).then(()=>{
            signup_dataquery(req,res);
        });
    }catch (e){
        res.status(400).json({
           'Error': e
        });
    }
});
router.post('/signin',sign_inmodel);
router.get('/signout',sign_outmodel);

export default router;