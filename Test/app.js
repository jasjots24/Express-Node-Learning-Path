// Core Module
//const http = require('http');

// External Module
const express = require('express');
const { log } = require('console');

const app = express();

//MIDDLEWARE

app.use("/",(req,res,next)=>{
    console.log(`Iam in 1st middleware${req.url, req.method}`);
    next();
})

app.use("/submit",(req,res,next)=>{
    console.log(`I am in 2nd middleware ${req.url, req.method}`);
    res.send(`Welcome to node learning series`)
})

//const server = http.createServer(app);

const port = 3090;
app.listen(port, ()=>{
    console.log(`Server started at-> https://localhost:${port}`);
})