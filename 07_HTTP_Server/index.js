// const http = require('http');
// const url = require('url');

// const server = http.createServer((req,res)=>{
//     const parsedUrl = url.parse(req.url, true);
//     const pathname = parsedUrl.pathname;
//     // const queury = parsedUrl.query;

//     if(req.method === 'GET' && pathname === '/great'){
//         res.writeHead(200,{content:'text/plain'});
//         res.end('Welcome to the great page!');
//     }else{
//         res.writeHead(404, {content:'text/plain'});
//         res.end('Page not found');
//     }
// });

// server.listen(3000,()=>{
//     console.log("Server is running on port 3000");
// });

const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req,res)=>{
    const log = `${Date.now()} : ${req.url} New request received\n`;

    fs.appendFile('server.txt', log, (err)=>{
    switch(req.url){
        case '/':
            res.end("Welcome to the home page!");
            break;
        case '/about':
            res.end("I am mantra");
        default:
            res.end("Page not found");
    }
    })

    // console.log(req.headers)
    // console.log(req)
});

const PORT = 8000;
myServer.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
});