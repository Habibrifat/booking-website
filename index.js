// const express = require('express');
import  express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import roomsRoute from './routes/rooms.js';
import cookieParser from 'cookie-parser';
import cors from 'cors'
import * as Process from "process";

const app = express();
dotenv.config();

// console.log(process.env["MONGO "]);
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO);
        console.log('connected  to MongoDB!');
    } catch (error) {
        throw(error);
        // console.log(error);
    }
};
mongoose.connection.on("connected",() =>{
    console.log("mongo db is connected");
})
mongoose.connection.on("disconnected",() =>{
    console.log("mongo db is disconnected");
})
// Use this code where you are connecting mongoose. This code will definitely work.
mongoose.connect(process.env.MONGO || 'mongodb+srv://rifat:rifat@cluster0.1h7phkd.mongodb.net/booking_website?retryWrites=true&w=majority',{ useNewUrlParser: true, useUnifiedTopology: true, writeConcern: { w: 'majority', j: true, wtimeout: 1000 } })


//middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors());

app.use('/auth',authRoute);
app.use('/users',usersRoute);
app.use('/hotels',hotelsRoute);
app.use('/rooms',roomsRoute);

app.use((error,req,res,next) => {
    return res.status(500).json(`Hello Error Occurred ! ${error}`);
});

app.use(express.static(path.join(__dirname, "/client/build")));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '/client/build', 'index.html'));
});

app.listen(process.env.PORT || 5000,() =>{
    connect();
    console.log('connected  to server!');
})
// app.listen(8080,() =>{
//     connect();
//     console.log('connected  to server!');
// })