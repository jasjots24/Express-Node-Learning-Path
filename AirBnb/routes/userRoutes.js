
const express = require('express')
const userRoutes = express.Router();
const path = require('path')
const rootDir = require('../utils/pathUtils')

//local modules
 
userRoutes.get("/",(req,res,next)=>{
    console.log(`This is the path-> ${req.url} This is the method-> ${req.method}`);
    res.sendFile(path.join(rootDir, 'views', 'homeAddress.html'))
})

module.exports = userRoutes;
