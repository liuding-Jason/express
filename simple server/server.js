
// server

var express = require("express") ;
var app = express() ;
var path = require("path");
var mockdata = require(path.join(__dirname , '/data/stuInfo')) ;

//设置跨域访问
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});

// 解析参数
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// test
app.get("/" , function(req , res){
	res.status(200);
	res.header("Content-Type" , "text/html");
	res.send("<h1>Hello Server!</h1>");

});


app.post("/" , function(req , res){
	res.status(200);
	res.send({
		code : 0 ,
		data : {} ,
		message : "con ok!"
	});
});


app.post("/list" , function(req , res){
	res.status(200) ;
	res.send({
		code : 0 ,
		data : {
			stuList : mockdata
		} ,
		message : 'ok'
	});
});

// test
app.get("/list" , function(req , res){
	res.status(200);
	res.send({
		code : 0 , 
		data : {
			stuList : mockdata
		} ,
		message : 'ok'
	});
});


app.post("/fix" , function(req , res){
	
	//test
	var params = req.body ;
	console.log("=====================");
	console.log(params);
	res.status(200) ;
	res.send({
		code : 0 ,
		data : {
			datalist : {}
		} ,
		message : 'ok'
	});
});


app.post("/del" , function(req , res){

	// test
	var params = req.body ;
	console.log("=====================");
	console.log(params);

	res.status(200) ;
	res.send({
		code : 0 ,
		data : {} ,
		message : 'ok'
	}) ;
});

app.listen(3001) ;
console.log("Server is running at port 3001");



