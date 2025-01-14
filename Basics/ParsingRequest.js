

const fs = require("fs");

const requestHandler=(req,res)=>{
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

    } else if(req.url.toLowerCase() ==="/detail-submitted" && req.method ==="POST"){
        
        let incomingData =[]
        req.on('data',(chunk)=>{
            console.log(chunk);
            incomingData.push(chunk)
        });

        req.on('end',()=>{
            const parsedBody = Buffer.concat(incomingData).toString();
            console.log(parsedBody);

            const params = new URLSearchParams(parsedBody)
            const bodyObject =  {}
            // STANDARD APPROACH 
            // for(const [key, value] of params.entries()){
            //     bodyObject[key] =value
            // }
            // console.log(bodyObject);

            // NEW WAY
            const bodyObjects = Object.fromEntries(params);
            console.log(bodyObjects);
            fs.writeFileSync("user.txt", JSON.stringify(bodyObjects));
        });
        res.statusCode=302;
        res.setHeader('Location','/')
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
    
};

module.exports = requestHandler;