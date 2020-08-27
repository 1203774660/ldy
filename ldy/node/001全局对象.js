//教程地址
//https://www.bilibili.com/video/BV1MW411g7bG?p=17



//npm install express --save
//node 001.js
//npm i nodemon -g --verbose    -g时全局的意思
//nodemon 001.js
//系统不给用脚本https://blog.csdn.net/l_x_cser/article/details/104956657
//ctrl+c退出
//ls查看当前目录下的文件

//express
//webpack
//切换服务器   淘宝npm镜像--》cnpm

//package.json记录下载的所有包
//npm init

//输出当前地址
console.log(__dirname);//D:\new room\vegetableChicken\ldy\node
//当前地址+文件
console.log(__filename);

console.log("hh");

//箭头函数

//n秒后
setTimeout(() => {
    console.log("3秒显示");
}, 3000);
setTimeout(function() {
    console.log("3秒显示");
}, 3000);

//间隔n秒一直输出
setInterval(() => {
    console.log('每隔2秒');
    
}, 2000);

var time =0;
var timer=setInterval(() => {
    time++;
    console.log('2每隔2秒');
    if(time>3){
        clearInterval(timer);
    }
    
}, 2000);