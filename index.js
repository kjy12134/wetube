//const express = require('express'); // import
// const morgan = require('morgan'); import
import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";

const app = express(); // get
const PORT = 4000;

// es6 ver js !!
const handleListening = () => console.log('Listening on http://localhost:${PORT}');
const handlehome = (req, res)  => res.send('HELLO FROM HOME');
const handleProfile = (req, res) => res.send('HELLO FROM PROFILE');
const handleTest = (req, res) => res.send('메롱 김지영 우하하');

// middleware
const betweenhome = (req, res, next) => {
    console.log("I'm between");
    next();
};

const between2 = (req, res, next) => {
    console.log("second");
    res
}

// middleware disconn
// const between = (req, res, next) => {
//     res.send("disconn");
// }


// requestHandler!!!
// [1]middleware
//app.use(betweenhome); 
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// [3]helmet
app.use(helmet());
// [2]morgan
// combined, tiny, common, dev
app.use(morgan("dev"));


// route
app.get("/", handlehome);
app.get("/profile", handleProfile);
app.get("/test", handleTest);
app.listen(PORT, handleListening);
