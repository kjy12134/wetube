//const express = require('express'); // import
import express from "express";

const app = express(); // get
const PORT = 4000;

// es6 ver js !!
const handleListening = () => console.log('Listening on http://localhost:${PORT}');
const handlehome = (req, res)  => res.send('HELLO FROM HOME');
const handleProfile = (req, res) => res.send('HELLO FROM PROFILE');
const handleTest = (req, res) => res.send('메롱 김지영 우하하');

app.get("/", handlehome);
app.get("/profile", handleProfile);
app.get("/test", handleTest);
app.listen(PORT, handleListening);
