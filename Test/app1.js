
const express = require('express')
const bodyParser = require('body-parser')

const app = express();

app.use((req,res,next)=>{
    console.log("Iam in middleware 1", req.url, req.path);
    next();
})

app.use((req,res,next)=>{
    console.log("Iam in middleware 2", req.url, req.path);
    next();
})

app.get('/contact-us',(req,res,next)=>{
    console.log("You are in contact page");
    res.send(`<form action='/contact-us' method='POST'>
        <input type='text' name='name' placeholder='Enter Your Name'/>
        <br><input type='text' name='email' placeholder='Enter Your Email'/>
        <br> <input type='submit'/>
    </form>`)
    next()
})

app.use(bodyParser.urlencoded());
app.get('/',(req,res,next)=>{
    console.log("You are in / method");
    next();
}) 

app.post('/contact-us',(req,res,next)=>{
    console.log("You are in Post method", req.body);
    res.send('Thanks for filling form')
}) 
app.use((req,res,next)=>{
    console.log("Iam in middleware 3", req.url, req.path);
    res.send("Welcome to the 3rd middleware")
    next();
})


const port = 2000;
app.listen(port,()=>{
    console.log("server started");
    
})