var http = require("http");
var fs = require("fs");

http.createServer(function(request,response){
	fs.readFile("index.html",function(err,data){
		if(err){
			console.log("错误",err);
		}else{
			var content = data.toString();
			response.end(content);
		}
	});
}).listen(3000);