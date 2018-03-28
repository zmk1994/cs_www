function myswiper(){
    var $of1=$("#first");
var $a1=$of1.find("li");
var $of2=$("#second");
var $a2=$of2.find("li");
var $btn1=$(".btn1");
var $btn2=$(".btn2");
$a1.eq(0).clone(true).appendTo($of1);
var len=$a1.length+1;

var perwidth=$a1.eq(0).width();
var width=len*perwidth;

$of1.css("width",width);
    var i=0;
    var timer1=null;
function move(){
    i++;
    if(i==len){
    $of1.css("left",0);
        i=1;
    }
    if(i==len-1){
        $a2.eq(0).addClass("active").siblings().removeClass("active");
        
        
    }else{
        $a2.eq(i).addClass("active").siblings().removeClass("active");
    }
    
    $of1.stop().animate({"left":-i*perwidth},400);
}

function start(){
    timer1=setInterval(function(){
    move();
},1000)
    
}
start();


$of1.hover(function(){
    clearInterval(timer1);
},function(){
    start();
})

$btn2.click(function(){	
    clearInterval(timer1);
move();
})

$btn1.click(function(){	
    clearInterval(timer1);	
    if(i==0){
        $of1.css("left",-(len-1)*perwidth);//-8*width
        i=len-3;//6+1=7正数第8张，倒数第二张。
    }else{
        i=i-2;
    }
    move();		
})

$of2.find("li").hover(function(){
    clearInterval(timer1);
    i=$(this).index()-1;
    move();
    
},function(){
    start();
    
})

}
export { //很关键
    myswiper
  }