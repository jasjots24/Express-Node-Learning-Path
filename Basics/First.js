/*console.log("Hello");

const fs = require("fs");

fs.writeFile("output.txt", "This is the file", (err)=>{
    if(err) throw err;
    else{console.log("File written successfully");
    }
}) */


// CREATING FIRST-SERVER

//1st way
/*const http = require("http");

function server(res,resp){
    console.log(res);
}

http.createServer(server); */


// 2nd way 

const http = require("http");

const server = http.createServer((req,res)=>{
    //console.log(req);
    //process.exit();   // IT HELPS TO EXIST FROM EVENT LOOP AND STOP THE SERVER

    console.log(req.url, req.method, req.headers);   // IF WE WANT TO PRINT ONLY SELECTIVE THINGS
    
})

const PORT = 3000;

server.listen(PORT,()=>{
    console.log(`This Server Is Running On-> https://localhost:${PORT}`);
    
})