
/*
* List Router
*/

var express = require("express") ;
var router = express.Router() ;

var mockData = [{
	name : 'Jack' ,
	age : 18 ,
	grade : 98 
},{
	name : 'Tom' ,
	age : 17 ,
	grade : 86
},{
	name : 'Bob' ,
	age : 18 ,
	grade : 99
}]

router.get("/" , function(req , res){
	res.status(200);
	res.send("<h1>Hello List!</h1>");
});

router.get("/:name" , function(req , res){
	res.status(200) ;
	res.render("list" , {title : 'jason' , list : mockData});
});

module.exports = router ;