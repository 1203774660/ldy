//传个对象
//响应json


var http=require('http');

var server =http.createServer(function (request,response) {
    response.writeHead(200,{"Content_Type":"application/json"});
    //传给浏览器内容
    response.write('123');

    var myobj={
        name:'ldy',
        job:'teach',
        age:18
    };

    //结束回信
    //把json对象变成个字符串传了过去
    //序列化过程
    response.end(JSON.stringify(myobj));

    //要在客户端取出数据就要反序列化
})

//监听端口
server.listen(3000);
console.log('监听了端口3000');

//反序列化
//可在浏览器consloe里输入了解
//myobj
//JSON.stringify(myobj)-->字符串
//JSON.parse(JSON.stringify(myobj))-->对象
