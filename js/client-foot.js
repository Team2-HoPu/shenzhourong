/**
 * Created by Administrator on 2017/8/17.
 */

window.onload=function(){
    var foot_img=document.getElementById("foot-img");
    foot_img.addEventListener("DOMMouseScroll",function(){
        scrollFunc();
    },false);

   function scrollFunc(){
       var bg_img=parseInt(foot_img.style.backgroundSize);
       console.log(bg_img);
       var e=event||window.event;
       if(e.wheelDelta){//IE/Opera/Chrome
           bg_img=parseInt(foot_img.style.width)+20;
       }else if(e.detail){//Firefox
           bg_img=parseInt(foot_img.style.width)+20;
       }
       foot_img.style.backgroundSize=bg_img+"%";
       console.log(foot_img.style.backgroundSize);
   }
}