
/*
* index router
*/

var express = require("express") ;
var router = express.Router() ;

router.get("/" , function(req , res){
	res.status(200);
	res.render("index" , {name : "Ejs"});
});

module.exports = router ;