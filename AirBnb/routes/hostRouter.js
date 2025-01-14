const express = require('express')
const path = require('path')

const hostRouter = express.Router();

const rootDir = require('../utils/pathUtils')


hostRouter.get("/add-home",(req,res,next)=>{
    console.log(`This is the path-> ${req.url} This is the method-> ${req.method}`);
    res.sendFile(path.join(rootDir, 'views', 'addHome.html'))
})


hostRouter.post("/add-home" , (req,res,next)=>{
    console.log(req.body);
    console.log(`This is the path-> ${req.url} This is the method-> ${req.method}`);
    res.sendFile(path.join(rootDir, 'views', 'formSubmission.html'))

})

module.exports=hostRouter;