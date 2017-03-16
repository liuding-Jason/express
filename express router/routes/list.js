
/*
* List Router
*/

var express = require("express") ;
var router = express.Router() ;

let mockData = [
{
	name : 'jack' , 
	age : 18 ,
	grade : 98
} , {
	name : 'tom' ,
	age : 17 ,
	grade : 86
} , {
	name : 'rose' ,
	age : 18 ,
	grade : 94
}];

var mkList = (mockData = []) => {
	let str = '<span class="name-line">姓名</span><span class="age-line">年龄</span><span class="grade-line">成绩</span><br/>' ;
	mockData.map((item , index) => {
		let {name , age , grade} = item ;
		str += `<span class="name-line">${name}</span><span class="age-line">${age}</span><span class="grade-line">${grade}</span><br/>` ;
	});
	return str ;
}

/* localhost:3000/list */
router.get("/" , function(req , res){
	res.status(200);
	res.send("<h1>Hello List</h1>");
});
/* localhost:3000/list/jack */
router.get("/:name" , function(req , res){
	res.status(200) ;
	let name = req.params.name || "成绩单" ;
	res.send(`<h1>${name}</h1>` + mkList(mockData));
});

module.exports = router ;