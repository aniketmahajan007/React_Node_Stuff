import mongoose from "mongoose";
import crypto from "crypto";
import {v4 as uuid} from 'uuid';

const UserSchema = new mongoose.Schema({
    name:{
        required: true,
        length:32,
        type: String,
        trim: true
    },
    email:{
        required:true,
        length: 32,
        type: String,
        trim:true,
        unique: true
    },
    hash_password: {
        required: true,
        trim: true,
        type: String
    },
    salt: {
        type:String
    }
},{timestamp: true});

UserSchema.virtual('password')
    .set(function (password){
        this.salt = uuid();
        this.hash_password = this.encrypt_password(password);
    }).get(function (){
        return this.hash_password;
});

UserSchema.methods = {
    authenticate: function (password){
        return this.hash_password === this.encrypt_password(password);
    },
    encrypt_password: function (password){
        if(!password){ return '';}
        try{
            return crypto.createHmac('sha1',this.salt).
            update(password).digest('hex');
        }catch (e) {
            return '';
        }
    }
}

export default mongoose.model('test',UserSchema)