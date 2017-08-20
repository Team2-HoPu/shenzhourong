window.onload=function(){
    var timer=null;
    var timer1=null;
    var next=getObj("next");
    var prev=getObj("prev");
    console.log(next,prev);
    var production_third_carousel=getObj("production_third_carousel");
    var buttons=document.getElementsByTagName("span");
    prev.addEventListener('click',function(){
        moving(1200,0,"-2400px");
    });
    next.addEventListener('click',function(){
        moving(-1200,-2400,"0");
    });
    for(var i=0;i<buttons.length;i++){
        (function(n){
            buttons[n].onclick=function(){
                button_control(this,n);
            }
        })(i)
    }
    function moving (speed,terminal,flag){
        var left_value=parseInt(production_third_carousel.style.left);
        console.log(left_value);
            if(left_value===terminal){
                production_third_carousel.style.left=flag;
            }else{
                left_value+=speed;
                production_third_carousel.style.left=left_value+"px";
            }
        for(var i=0;i<buttons.length;i++){
            buttons[i].setAttribute("class","");
        }
        buttons[left_value/-1200].setAttribute("class","on");
    }
    function button_control(that,num) {
        //在修改class前，清空所有class；
        for(var i=0;i<buttons.length;i++){
            buttons[i].setAttribute("class","");
        }
        //点击span修改class为“on”；
        that.setAttribute("class","on");
        //控制图片移动到当前位置
//            console.log(num);
        list.style.left=num*(-1200)+"px";
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