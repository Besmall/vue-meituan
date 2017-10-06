//一段重命名文件脚本
var fs=require("fs"),path = require('path');
var files = fs.readdirSync(__dirname);

var start=0;
var qiandao="";
console.log(__dirname);
files.forEach(function (file, index) {

	
	var ext=path.extname(file);
	
	if(ext!=".js"){
		var newName=qiandao+(++start)+ext;
		fs.rename(file,newName,function(err){
			console.log(err);
		});
	}
	
});