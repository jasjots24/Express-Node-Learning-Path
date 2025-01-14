
const http = require("http");
const requestHandler = require('./ParsingRequest')

const server = http.createServer(requestHandler);

let port = 3002;
server.listen(port, ()=>{
    console.log(`Server has started on --> https://localhost:${port}`)
});