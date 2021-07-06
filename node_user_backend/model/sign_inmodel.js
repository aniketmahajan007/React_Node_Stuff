import emailvalidator from "../module/emailvalidator.js";
import passwordValidator from "../module/passwordvalidator.js";
import User from '../database/user.js';
import jwt from 'jsonwebtoken'
import {config} from "dotenv";

export function sign_inmodel(req,res){
    const {email, password} = req.body;
    let result = emailvalidator(email);
    if(result !== true){
        res.status(401).json({
           'Error':'Email or password is incorrect'
        });
        return;
    }
    result = passwordValidator(password);
    if(result !== true){
        res.status(401).json({
            'Error':'Email or password is incorrect'
        });
        return;
    }
    //Authenticate email from database and fetch details
    User.findOne({email},(err,user) => {
        if(err || !user){
            res.status(401).json({
                'Error':'Email or password is incorrect'
            });
            return;
        }
        // Validate hashed password
        if(!user.authenticate(password)){
            res.status(401).json({
                'Error':'Email or password is incorrect'
            });
            return;
        }
        // Generate token
        const token = jwt.sign({user: user._id},config().parsed.JWT_KEY);
        res.json({
            token,
            'Status':'Success'
        });
        // Genrate Cookie
        res.cookie('token',token,{expires:new Date() + 360000})
    });
}