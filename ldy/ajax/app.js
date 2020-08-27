// 引入expres框架--快速创建网站服务器
const  express=require('express');
// 路径处理模块--处理静态资源文件夹目录
const  path =require('path');
const bodyParser=require('body-parser');
//创建web服务器
const app=express();
//读取文件
const fs=require('fs');

//静态资源访问服务功能--public文件夹
app.use(express.static(path.join(__dirname,'public')));

// app.use(bodyParser());
//格式参数为xx=xx&xx=xx 004
// app.use(bodyParser.urlencoded());
//格式参数为{xx:xx,Xx:xx}
app.use(bodyParser.json());

app.get('/first',(req,res)=>{
    res.status(400).send('hello,ajax');
})//001
app.get('/responseData',(req,res)=>{
    res.send({'name':'ldy'});
})//002
app.get('/get',(req,res)=>{
    // 获取请求query  send响应给浏览器
    res.send(req.query);
})//003
app.post('/post',(req,res)=>{ 
    //需要第三方模块body-parser  获取请求参数
    res.send(req.body);
    // app.use(bodyParser());
    
})//004
app.post('/json',(req,res)=>{ 
    //需要第三方模块body-parser  获取请求参数
    //记得加use
    //app.use(bodyParser.json());
    res.send(req.body);
})//005
app.get('/readystate',(req,res)=>{    
    res.send('hello');
})//006
app.get('/error',(req,res)=>{  
    //输出一个不存在的变量  返回500状态码
    // console.log(abc);
      
    res.status(400).send('not ok');
})//007
app.get('/cache',(req,res)=>{    
    // ()=>文件读取成功后 直接调用
    fs.readFile('./007test.txt',(err,result)=>{
        res.send(result);
    });
})//008


//监听窗口
app.listen(3000);
//控制台提示输出
console.log('服务器启动成功');

//终端node app.js
// 搞个public 和index
// 到浏览器输入http://localhost:3000/
