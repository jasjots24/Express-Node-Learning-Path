const express = require('express');

//local Module
const userRoutes = require('./routes/userRoutes');
const hostRouter = require('./routes/hostRouter');
const path = require('path')
const rootDir = require('./utils/pathUtils')


const app = express();

app.use((req,res,next)=>{
    console.log("KIA ORA");
    next();
})

app.use(express.static(path.join(rootDir,'public')))

app.use(express.urlencoded())

app.use(userRoutes);

app.use("/host",hostRouter);

const PORT = 3005
app.listen(PORT, ()=>{
    console.log(`Server started at http://localhost:${PORT}`);
    
})