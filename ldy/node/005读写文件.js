var fs=require('fs');
var read=fs.readFileSync('005.txt','utf8');
// 读取内容
console.log(read);

// 复制文件
fs.writeFileSync('005new.txt',read);

// 同步时从头到尾
//如果文件很大，后面的内容要等很久
//解决方法-异步
//注意输出顺序


//事件队列注册一个事件。回调函数没用马上执行，
//先执行主线程，主线程空闲后再看事件队列
//异步操作
var read=fs.readFile('005.txt','utf8',function(err,data){
    console.log(data);
    
});


var read=fs.readFile('005.txt','utf8',function(err,data){
    //writefile的异步
    fs.writeFile('005newnew.txt',data,function () {
    console.log('xie');
})
});
console.log("后面的内容");




