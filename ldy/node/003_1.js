//数组
var changdu=function (arr) {
    return "数组长度为"+arr.length;
    
}
var add=function(a, b){
    return'sum= '+(a+b);
    
}

var pi=3.14
//暴露内容
// module.exports=changdu;//单个暴露

//多个暴露
// module.exports.changdu=changdu;
// module.exports.add=add;
// module.exports.pi=pi;

//简写
module.exports={
    changdu:changdu,
    add:add,
    p:pi
}

//也可以
// module.exports={
//     changdu:changdu=function (arr) {
//         return "数组长度为"+arr.length;
        
//     },
//     add:add,
//     p:pi
// }




