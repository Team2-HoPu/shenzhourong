/**
 * Created by Administrator on 2017/8/18.
 */
//---------------------------------******************************************************------------------------
//右边栏动画开始
    function floatIco(){
    var obtn=document.getElementById("sidabar-center-return");
    var clientHeight=document.documentElement.clientHeight;//可视区域的高度
    var osTop=document.documentElement.scrollTop||document.body.scrollTop;//scrollTop为滚动条滑动的距离
    if (osTop>=clientHeight) {
        obtn.style.display='block';
        obtn.addEventListener("click",function(){
            obtn.style.display='block';
            var turn_scrolltop=document.body.scrollTop-=500;
            var scrolltop_e=document.documentElement.scrollTop-=800
            turn_scrolltop||scrolltop_e;
        });
    }
    else if(osTop<=100){
        obtn.style.display='none';
    }
    else
    {
        obtn.style.display='none';
    }
}
//右边栏动画结束
//-----------------**********************************************----------------------------
//-----------************************-----------------------
//底部动画
function foot_anima () {
var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
// var foot_imgpic=document.getElementById('foot_animation').contentWindow.document.getElementsByClassName('foot_imgPic')[0];
var foot_imgpic=document.getElementsByClassName("foot_imgPic")[0];
console.log("foot_imgpic:"+foot_imgpic);
console.log(scrollTop);
if(scrollTop>=1500){
    foot_imgpic.style.transition="all 1.5s";
    foot_imgpic.style.transform="translate(0,20px)";
}
else if(scrollTop<1500){
    foot_imgpic.style.transition="all 1.5s";
    foot_imgpic.style.transform="translate(0,-20px)";
}
else
{   foot_imgpic.style.transition="";
    foot_imgpic.style.transform="";
}
}
//底部动画结束
//----------------*****************************---------------------------




