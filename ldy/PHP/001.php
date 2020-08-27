/<?php
    //注释
    /*
    多行
    */


    //设置页面编码格式 使用php的函数
    header('content-type:text/html;charset=utf-8');
    
    //输出
    echo 'hello world';
    //中文的话不知道用什么编码解析
    echo '你好';
    //定义变量 
    $name ='呆呆';
    echo $name;
    //数组
    $num=123;
    echo $num;
    //换行
    echo '<br>';
    //<br>---php页面 在服务器端执行完毕，然后结果返回给浏览器


    //小数
    $pi=1.1223
    echo $pi;
    //bool
    $male =false;
    
    if($male==false){
        echo '110';
    }else{
        echo "120";
    }

    //选择语句
    $day="星期一"
    swich($day){
        case '星期一':
        case '星期二':
        case '星期三':
        case '星期四':
        case '星期五':
        echo '上班';
        break;
        case '星期六':
        echo '加班';
        break;
        case '星期七'：
        echo '加加班';
        break;
        default:
        echo '放假'
        break;

    }

    //循环  
    for($i=0;$i<10;$i++){
        //拼接字符用点.
        echo 'good'.$i;
    }

    while($num<998){
        echo 'hhh';
        $num--;
    }
    // do{}while

    //数组
    $stararr =array(
        array('name'=>'ldy',"film"=>'无间道','friend'=>'ldd'),
        array('name'=>'luy',"film"=>'无道','friend'=>'lpd'),
        array('name'=>'lyy',"film"=>'间道','friend'=>'lod'),

    )
    for($i=0;$i<10;$i++){
        //拼接字符用点.
        echo '<h2>明星：'.$stararr[$i]['name'].'出演了：'.$stararr[$i]['film'].'朋友是：'.$stararr[$i]['friend'].'<br></h2>';
    }

?>