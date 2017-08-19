window.onload=function(){
    var timer=null;
    var timer1=null;
    var next=getObj("next");
    var prev=getObj("prev");
    console.log(next,prev);
    var production_third_carousel=getObj("production_third_carousel");
    prev.addEventListener('click',function(){
        moving(1200,0,"-2400px");
    });
    next.addEventListener('click',function(){
        moving(-1200,-2400,"0");
    });
    function moving (speed,terminal,flag){
        var left_value=parseInt(production_third_carousel.style.left);
        console.log(left_value);
            if(left_value===terminal){
                production_third_carousel.style.left=flag;
            }else{
                left_value+=speed;
                production_third_carousel.style.left=left_value+"px";
            }
    }
    timer=setInterval(function(){
        moving(-1200,-2400,"0");
    },2000);
    getObj("production_third_content").onmouseover=function(){
        clearInterval(timer);
        clearInterval(timer1);
    };
    getObj("production_third_content").onmouseout=function(){
        timer1=setInterval(function(){
            moving(-1200,-2400,"0");
        },2000);
    }
};