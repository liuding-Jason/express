
/*
	cookie set 
*/

// install cookie-parser
var express = require("express") ;
var cookieP = require("cookie-parser") ;

var app = express() ;
app.use(cookieP());

app.get("/" , function(req , res){
	res.status(200) ;
	// Cookies that have not been signed
  	console.log('Cookies: ', req.cookies)

  	// Cookies that have been signed
  	console.log('Signed Cookies: ', req.signedCookies)

	res.send("<h1>Hello World Cookie!</h1>") ;
}) ;

app.listen(3000) ;
console.log("Server started at port 3000!");