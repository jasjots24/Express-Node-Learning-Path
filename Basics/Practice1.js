const http = require('http');

const fs = require('fs')

const server = http.createServer((req,res)=>{
    console.log(req.headers, req.url, req.method);

    if(req.url==="/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Home</title></head>')
        res.write('<body><p>WELCOME TO HOMEPAGE</p>')
        res.write('<ul>')
        res.write('<li><a href="/home">HOME</a></li>');
        res.write('<li><a href="/men">MEN</a></li>');
        res.write('<li> <a href="/women">WOMEN</a></li>');
        res.write('<li><a href="/kids">KIDS</a></li>');
        res.write('<li><a href="/cart">CART</a></li>');
        res.write('</ul>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }else if(req.url.toLowerCase()==='/men'){

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Men-Section</title></head>')
        res.write('<body><p>WELCOME TO MEN`S PAGE</p>')
        res.write('<br><a href="/">RE-DIRECT?</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }else if(req.url.toLowerCase()==='/women'){

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Women-Section</title></head>')
        res.write('<body><p>WELCOME TO WOMEN`S PAGE</p>')
        res.write('<br><a href="/">RE-DIRECT?</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    else if(req.url.toLowerCase()==='/kids'){

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>kids-Section</title></head>')
        res.write('<body><p>WELCOME TO KIDS`S PAGE</p>')
        res.write('<br><a href="/">RE-DIRECT?</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end();
    }
    else if(req.url.toLowerCase()==='/cart'){

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Cart-Section</title></head>')
        res.write('<body><p>WELCOME TO CART`S PAGE</p>')
        res.write('<br><a href="/">RE-DIRECT?</a>')
        res.write('</body>')
        res.write('</html>')
        return res.end();

    } 
    else if(req.url.toLowerCase() ==="/home" && req.method==="GET"){
        res.statusCode=302;
        res.setHeader('Location','/')
    }
    else {

        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Unkown-Section</title></head>')
        res.write('<body><p>THIS IS AN UNKOWN PAGE</p>')
        res.write('<br><a href="/home">RE-DIRECT?</a>')
        res.write('</body>')
        res.write('</html>')
        res.end();
    }



    
})

const port = 2000;

server.listen(port, ()=>{
    console.log(`Server started at --> https://localhost:${port}`);
    
})

