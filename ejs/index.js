
/*
* ejs template tools 
*/

var path = require("path");
var express = require("express");
var app = express() ;

// routes
var IndexRouter = require(path.join(__dirname , "routes/index")) ;
var ListRouter = require(path.join(__dirname , "routes/list")) ;

//ejs engine
app.set("views" , path.join(__dirname , "views"));
app.set("view engine" , "ejs");

app.use("/" , IndexRouter);
app.use("/list" , ListRouter);

app.listen(3000);
console.log("server is running at port 3000");

