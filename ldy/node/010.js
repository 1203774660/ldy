//响应html页面

var http=require('http');
var fs=require('fs');

var onrequest =function (request,response) {

    console.log('收到了请求');

    response.writeHead(200,{"Content_Type":"text/html"});//text/plain
    var read=fs.createReadStream(__dirname+'/010.html','utf8');
    read.pipe(response);
}
var server =http.createServer(onrequest);

//监听端口
// server.listen(3000);
server.listen(3000,'127.0.0.1');
console.log('监听了端口3000');
