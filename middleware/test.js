
/*
* Express Middleware 
* 
* Sorry ! send file can use res.sendFile(file url)
*/

var express = require("express") ;
var path = require("path") ;
var fs = require("fs") ;

var app = express() ;

// middleware 1
app.use(function(req , res , next){
	if(req.url === "/"){
		res.writeHead(200 , {"Context-Type" : "text/html"}) ;
		var indexStream = fs.createReadStream(path.join(__dirname , "/index.html"));
		var data = '' ;
		indexStream.on("data" , function(chunk){
			data += chunk ;
		}) ;
		indexStream.on("error" , function(err){
			console.error(err);
			next() ;
		}) ;
		indexStream.on("end" , function(){
			res.end(data);
		}) ;
	}else{
		next() ;
	}
});


// middleware 2
app.use(function(req , res , next){
	if(req.url === "/list"){
		res.writeHead(200 , {"Context-Type" : "text/plain"});
		var listStream = fs.createReadStream(path.join(__dirname , "/list.html")) ;
		var data = '' ;
		listStream.on("data" , function(chunk){
			data += chunk ;
		});
		listStream.on("end" , function(){
			res.end(data);
		})
		listStream.on("end" , function(err){
			console.error(err);
			next() ;
		})
	}else{
		next() ;
	}
});

// middleware 3
app.use(function(req , res , next){
	if(req.url === "/image"){
		res.writeHead(200 , {"Context-Type" : "image/png"});
		var mess = "下载中"
		var t = setInterval(function(){
			res.write(mess + ".");
		} , 1000);
		var data = fs.readFileSync(__dirname + "/title.png");
		res.end(data);
	}else{
		next() ;
	}
});

// middleware 4
app.use(function(req , res , next){
	res.writeHead(200 , {"Context-Type" : "text/html"}) ;
	var noDataStream = fs.createReadStream(path.join(__dirname + "/404.html")) ;
	var data = '' ;
	noDataStream.on("data" , function(chunk){
		data += chunk ;
	}) ;
	noDataStream.on("end" , function(){
		res.end(data);
	}) ;
	noDataStream.on("err" , function(err){
		console.error(err);
	}) ;
});

app.listen(3000) ;
console.log("server is running at port 3000") ;