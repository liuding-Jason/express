
/*
* Session is one of the way to remebering the HTTP's status between a client and a server . In express , we use session modlue which called "express-session" to help us handle session. 
*/

// npm install express-session

var express = require("express") ;
var session = require("express-session") ;

var app = express() ;

// Populates req.session
app.use(session({
  resave: false, 			// don't save session if unmodified
  saveUninitialized: false, // don't create session until something stored
  secret: 'liuding key'
}));

app.get('/', function(req, res){
  var body = '' ;
  if (req.session.views) {
    ++req.session.views;
  } else {
    req.session.views = 1;
    body += '<p>First time visiting? view this page in several browsers :)</p>';
  }
  res.send(body + '<p>viewed <strong>' + req.session.views + '</strong> times.</p>');
});

/* istanbul ignore next */
if (!module.parent) {
  app.listen(3000);
  console.log('Server started on port 3000');
}