

//element表示一个dom元素  如a标签 div
//jqury的
// Element.on('clicl',function(){
//     console.log('点击事件');
    
// })


// var shijain=new EventSource.EventEmitter();
// shijain.on('someEvent',function(a){
//     console.log(a);
    
// })

// shijain.emit('someEvent','内容');

//node.js的
//events核心库

//继承工具库
var e=require("events");
var util=require('util');
//定义一个类
var Person=function(name){
    this.name=name;
}
//绑定事件
util.inherits(Person,e.EventEmitter);

var xiaomin=new Person('xiaomin');
var xiaohon=new Person('xiaohon');

//把对象放到数组中
var person=['xiaomin','xiaohon'];

//每个对象绑定一个事件
person.forEach(function(person){
    person.on('speak',function(message){
        console.log(person.name+'said:'+message);
        
    })
})


//触发事件
xiaomin.emit('speak','hi');
xiaohon.emit("speak","hello");


