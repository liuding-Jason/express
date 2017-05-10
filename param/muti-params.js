
/*
	muti-params 
*/

var express = require("express") ;
var path = require("path") ;
var app = express() ;

const baseUrl = "localhost" ;
const port    = 3000 ;

// RESTFUL API
app.param(['username' , 'password'] , function(req , res , next , value){
	if(value.length < 8){
		res.status(200);
		res.send("<h2>Make sure your username and password are more than 8 characters !</h2>");
	}else{
		next() ;
	}
});

app.get("/" , function(req , res){
	res.status(200) ;
	res.send(`<h1>Hello Guest</h1><a href='//${baseUrl}:${port}/login'>Login In</a>`);
});


app.get("/login" , function(req , res){
	res.status(200);
	res.sendfile(path.join(__dirname , "/login.html"));
});

app.get("/login/:username/:password" , function(req , res){
	res.status(200);
	res.send("<h1>Welcome Guest!</h1>");
});

app.listen(3000);
console.log("Server started at port 3000!");
