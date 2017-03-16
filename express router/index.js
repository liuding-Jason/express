
/*
* Express Router 
*/

var express = require("express") ;
var app = express() ;

var IndexRouter = require("./routes/index") ;
var ListRouter  = require("./routes/list") ;

app.use("/" , IndexRouter);
app.use("/list" , ListRouter);

app.listen(3000) ;
console.log("server is running at port 3000");