
/*	
* Use Redis to store sessions 
*/

// install logger
// npm install morgan --save

var express = require("express") ;
var logger  = require("morgan") ;
var session = require("express-session") ;

// install connect-redis to connect redis
var RedisStore = require("connect-redis")(session) ;

app.use({
	resave: false, 				// don't save session if unmodified
	saveUninitialized: false, 	// don't create session until something stored
	secret: 'liuding key',
	store: new RedisStore
}) ;

app.get("/" , function(req , res , next){
	var body = '' ;
	if(){}



});


if(!module.parent){
	app.listen(3000) ;
	console.log("Server started at port 3000");
}
