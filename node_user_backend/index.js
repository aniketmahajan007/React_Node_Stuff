import express from 'express';
import {config} from "dotenv";
import router from "./routes/user.js";
import mongoose from 'mongoose';
import bodyParser from "body-parser";
import cookieparser from 'cookie-parser';
import morgan from 'morgan';


const app = express();

//Database connect

mongoose.connect(config().parsed.DATABASE,{
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}).then(()=>{console.log('Database connected');})

// middleware
app.use(bodyParser.json());
app.use(cookieparser());
app.use(morgan('dev'))


//routes
app.use('/api',router);

// server status

app.listen(config().parsed.PORT,()=>{
    console.log('running at: '+config().parsed.PORT);
})