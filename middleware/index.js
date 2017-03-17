
/*
* Express Middleware 
*/

var express = require("express") ;
var app = express() ;

// middleware 1
app.use(function(req , res , next){
	if(req.url === "/"){
		res.writeHead(200 , {"Context-Type" : "text/html"}) ;
		res.end("<h1>Hello Middleware!</h1>");
	}else{
		next() ;
	}
});

// middleware 2
app.use(function(req , res , next){
	if(req.url === "/list"){
		res.writeHead(200 , {"Context-Type" : "text/html"}) ;
		res.end("<h1>Hello List!</h1>");
	}else{
		next() ;
	}
});

// middleware 3
app.use(function(req , res , next){
	res.writeHead(404 , {"Context-Type" : "text/plain"}) ;
	res.end("404") ;
}) ;

app.listen(3000);
console.log("server is running at port 3000");



