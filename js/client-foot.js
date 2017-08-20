/**
 * Created by Administrator on 2017/8/17.
 */

window.onload=function(){
    document.getElementById("foot-img").addEventListener("scroll",function(){
        scrollFunc();
    })
   function scrollFunc(){
       var e=event||window.event;
       if(e.wheelDelta){//IE/Opera/Chrome
           foot_img.style.backgroundSize="120%"
       }else if(e.detail){//Firefox
           foot_img.style.backgroundSize="120%"
       }
   }
};