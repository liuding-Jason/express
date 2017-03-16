
/*
* index router
*/

var express = require("express") ;
var router = express.Router() ;

router.get("/" , function(req , res){
	res.status(200);
	res.send("<h1>Hello Express!</h1>");
});

module.exports = router ;
