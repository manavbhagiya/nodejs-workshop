//Load http Package
var http = require("http");

//Create Server Code
http.createServer(function(req,res) {
    //Print Message On Browser
    res.end("<h1>Welcome To Node JS.</h1>");
}).listen(3000);
console.log("Server Is Started http://127.0.0.1:3000");