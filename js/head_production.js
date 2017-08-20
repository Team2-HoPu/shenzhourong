/**
 * Created by Administrator on 2017/8/20 0020.
 */
//控制顶部页面的js部分
document.onscroll=function(){
    var tit = document.getElementsByTagName("nav")[0];
    var tittop=tit.offsetTop;
    var navimg=tit.getElementsByTagName("img")[0];
    var btop = document.body.scrollTop||document.documentElement.scrollTop;
    if(btop>tittop){
        tit.setAttribute("style","background-color:white;color:black;border:1px solid black;");
        navimg.setAttribute("src","../img/protect_images/iphone_logo02.png");
    }
    else{
        tit.setAttribute("style","");
        navimg.setAttribute("src","../img/protect_images/logo.png");
    }

}
