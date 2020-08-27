var fs=require('fs');

//删除文件
// fs.unlink('006.txt',function(){
//     console.log("删除文件");   
// });
// fs.unlinkSync('006.txt');

//创建目录
fs.mkdir('stuff',function(){
    fs.readFile('005.txt',"utf8",function(err,data){
        fs.writeFile('./stuff/005.txt',data,function(){
            console.log("复制005到新建的stuff文件目录下");
            
        })
    })
})