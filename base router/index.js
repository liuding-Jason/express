
/*
	base router -- express().route()
*/

var express = require("express") ;
var app = express() ;

//设置跨域访问 - config1 
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With , Content-Type");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By",' 3.2.1')
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});


// 解析参数 - config2
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })) ;


app.get("/" , function(){
	res.status(200) ;
	res.send("<h1>Hello Express Base Route!</h1>");
});

app.route("/list")
.all(function(req , res , next){ 	// all kind of http types
	res.status(200) ;
})
.get(function(req , res , next){	// Get
	res.send("<h1>Hello List Get</h1>") ;
})
.post(function(req , res , next){ 	// Post
	res.send("<h1>Hello List Post</h1>");
});

if(!module.parent){
	app.listen(3000) ;
	console.log("Server started at port 3000");	
}
