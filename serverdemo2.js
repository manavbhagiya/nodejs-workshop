//Load http Package
var http = require("http");
var a = 10;
var b = 20;
var sum = a + b;
var msg = `Value Of A : ${a} <br/> Value Of B : ${b} <br/> Sum Of A And B : ${sum}`;

//Create Server Code
http.createServer(function(req,res) {
    //Content Head
    res.writeHead(200,{"Content-type":"text/html"});

    //Print Message On Browser
    res.end("<h1>"+msg+"</h1>");
}).listen(3000);
console.log("Server Is Started http://127.0.0.1:3000");