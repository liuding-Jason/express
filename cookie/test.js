
/*
	cookie parser
	install : cookie-parser
	use		: express().use(cookieParser([`name string`]))
	api 	: res.cookies -- get all cookies 
			  res.cookie(string , value [, option]) -- option - maxAge and so on 
*/

var express = require("express") ;
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = module.exports  = express() ;

// custom log format
if ('test' != process.env.NODE_ENV) app.use(logger(':method :url'));

app.use(bodyParser());
app.use(cookieParser("my secert")) ;

app.get("/" , function(req , res){
	res.status(200) ;
	if(req.cookies.remember){
		res.send("<a href='/forget'>Forget Cookie</a>");
	}else {
		res.send(`
			<form method="post">
				<p>
					Check to 
					<label>
      					<input type="checkbox" name="remember"/> 
      					remember me
      				</label>
      			</p>
				<input type="submit" value="submit"/>
			</from>
		`);
	}
}) ;

app.post("/" , function(req , res){
	res.status(200) ;
	console.log(req.body);
	let minute = 60000 ;
	if(req.body.remember === "on"){
		res.cookie('remember', 1 , { maxAge: minute });
	}
  	res.redirect('back');
});

app.get("/forget" , function(req , res){
	res.clearCookie('remember');
  	res.redirect('back');
});


if(!module.parent){
	app.listen(3000) ;
	console.log("Server started at 3000!");
}