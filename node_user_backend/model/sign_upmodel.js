import emailvalidator from "../module/emailvalidator.js";
import passwordValidator from "../module/passwordvalidator.js";
import User from "../database/user.js";
import bodyParser from "body-parser";

export function sign_upmodel(data){
    return new Promise((resolve, reject)=>{
        let result = emailvalidator(data.email);
        if(result === undefined){
            reject('Email is required');
            return;
        }
        if(result === 'length'){
            reject('Email should be between 3 to 32 chars');
            return;
        }
        if(!result){
            reject('Email is not valid');
            return;
        }
        if(data.name === undefined || data.name === null){
            reject('Name is required');
            return;
        }
        if(data.name.length<3 || data.name.length > 32){
            reject('Name should be between 3 to 32 chars');
            return;
        }
        result = passwordValidator(data.password);
        if(result === undefined){
            reject('Password is required');
            return;
        }
        if(result === 'length'){
            reject('Password should be between 6 to 32 chars');
            return;
        }
        if(result === 'weak'){
            reject('Password should contain at least one number');
            return;
        }
        resolve('Success');
    });
}

export function signup_dataquery(req,res){
    User.findOne({email:req.body.email},(err,response)=>{
        console.log(err,response);
        if(err || !response){
           const adduser = new User(req.body);
           adduser.save((err,response)=> {
               if(!err){
                   response.salt = undefined
                   response.hash_password = undefined;
                   res.json({
                       'Status':'Success',
                       'user':response
                   });
               }else{
                   res.status(400).json({
                       'Error':'Database error occurred'
                   });
               }
           });
       }else{
           res.status(400).json({
               'Error':'Email already exist'
           });
       }
    });
}