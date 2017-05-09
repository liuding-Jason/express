
/*	
* Use Redis to store sessions 
*/

// install logger
// npm install morgan --save
var express = require('express');
var logger = require('morgan');
var session = require("express-session") ;


// pass the express to the connect redis module
// allowing it to inherit from session.Store
var RedisStore = require('connect-redis')(session);

console.log(new RedisStore);

var app = express();

app.use(logger('dev'));

// Populates req.session
app.use(session({
  resave: false , // don't save session if unmodified
  saveUninitialized: false , // don't create session until something stored
  secret: 'liuding key' ,
  store: new RedisStore
}));

app.get('/', function(req, res) {
  var body = '' ;
  if (req.session.views) {
    ++req.session.views;
  } else {
    req.session.views = 1;
    body += '<p>First time visiting? view this page in several browsers :)</p>';
  }
  res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

if(!module.parent){
	app.listen(3000) ;
	console.log("Server started at port 3000") ;
}
