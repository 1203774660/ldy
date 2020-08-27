//web服务器

var http=require('http');


//request 请求
//response  响应
var server =http.createServer(function (request,response) {
    //收到请求
    console.log('收到了请求');
    
    //传  200状态码   {}对象  类型：文件
    response.writeHead(200,{"Content_Type":"text/plain"});
    // //传给浏览器内容
    // response.write('传给页面的内容');
    // //结束回信
    // response.end();

    response.end('传给页面的内容');
})

//监听端口
// server.listen(3000);
server.listen(3000,'127.0.0.1');
console.log('监听了端口3000');

//在浏览器打开localhost:3000
