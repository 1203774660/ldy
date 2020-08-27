

//函数
function hanShu() {
    console.log("hi");
}
hanShu();
//匿名
var h=function(num){
    console.log('匿名函数'+num);
}
h();
//函数包含函数
function hanshu2(num) {
    num();
}
hanshu2(h);//传输一个函数

//带参数
function hanshu3(hs,num) {
    hs(num);
}
hanshu3(h,30);//传输一个函数
//写法2 h写进去
hanshu3(function(num){
    console.log('2匿名函数'+num);
},30);