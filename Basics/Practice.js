const http = require("http")
   
const server = http.createServer((req,res)=>{
            console.log(req.url, req.method);
    
    if(req.url==="/"){  

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title> This is the Home_Page</title></head>')
        res.write('<body><h1> ENTER YOUR DETAILS HERE</h1>');
        res.write('<form action="/detail-submitted" method="POST">');
        res.write('<input type="text" name="username" placeholder="Enter Your Name"><br>');
        res.write('<label for="male">MALE</label>');
        res.write('<input type="radio" id="male" name="gender" value="male" />');
        res.write('<label for="female">FEMALE</label>')
        res.write('<input type="radio" id="female" name="gender" value="female" />')
        res.write('<br> <input type="submit" vale="Submit">')
        res.write('</form>');
        res.write('</body>');
    
        res.write('</html>');
        return res.end();
    } else if(req.url==="/detail-submitted" && req.method==="POST"){
        res.setHeader('Location','/')
        const body=[];
        req.on('data',(chunks)=>{
            body.push(chunks);
        })
        req.on('end', ()=>{
            const parsedBody = Buffer.concat(body).toString();
            const params = new URLSearchParams(parsedBody);
            const jsonBody={}; 
            for(const [keys,value] of params.entries()){
                jsonBody[keys] = value;
            }
            console.log(jsonBody);
            
        })
    
    }
    else if(req.url==="/contact") {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title> CONTACT-US</title></head>')
        res.write('<body><p> HELLO EVERYONE PLEASE US ON 9871676606</p></body>');
        res.write('</html>');
        return res.end();
    
        }
    
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title> This is the Response</title></head>')
        res.write('<body><p>DETAILS SUBMITTED SUCCESSFULLY</p></body>');
        res.write('</html>');
        res.end();
        
})

let PORT  = 3004

server.listen(PORT,()=>{
    console.log(`Server Started on --> https://localhost:${PORT}`);
    
})
