
/*
* Express hello world 
*/
var express = require("express") ;
var app = express();

app.get("/" , function(req , res){
	res.status(200);
	res.send("<h1>Hello World</h1>");
});

app.listen(3000);
console.log("express server is running at port 3000");