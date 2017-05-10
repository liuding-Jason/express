/*
	param - attach a callback function in Get requests 
*/

var express = require("express") ;
var app = express() ;

var userId = 0 ;
app.param("user" , function(req , res , next , id){
	userId = id ;
	console.log("The user id is " + id) ;
	next() ;
});

app.get("/:user" , function(req , res){
	res.status(200);
	res.end(`<h1>Hello User ${userId}</h1>`) ;
});

app.get("/" , function(req , res){
	res.send("<h1>Hello World!</h1>");
});

if(!module.parent){
	app.listen(3000);
	console.log("Server started at port 3000");
}

