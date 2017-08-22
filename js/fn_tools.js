// 获取标签ID
function getId(elementId) {
    return document.getElementById(elementId)?document.getElementById(elementId):null;
}
//获取标签TagID
function getTagId(elementTagName,objArryIndex) {
    var TagName=document.getElementsByTagName(elementTagName)[objArryIndex];
    return TagName!=null?TagName:null;
}
//轮播左右切换事件：参数(图片list，切换大小，总长度，设定长度)
function slide(imgAtt,speed,terminal,flag){
    var left_value=parseInt( imgAtt.style.left);
    if(left_value===terminal){
        imgAtt.style.left=flag;
        left_value=parseInt(imgAtt.style.left);
    }else{
        left_value+=speed;
        imgAtt.style.left=left_value+"px";
    }
    return left_value;
}
//轮播圆点按钮切换事件

// 头部导航固定

    function heade_nav() {
        var scrollTop=document.body.scrollTop;
        var header_toptit=getId("index-header_toptit");
        var objHeight = header_toptit.offsetTop;
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        var index_nav_tit=document.getElementsByClassName("index-nav_tit");
        var index_logo=document.getElementsByClassName("index_logo")[0];
        var index_nav_tit_itemTxt=document.getElementsByClassName("index-nav_tit_itemTxt");

        for(var a=0;a<index_nav_tit.length;a++){
            var tit_name=index_nav_tit[a].getElementsByTagName("a");

            if(scrollTop < objHeight){
                header_toptit.style.position = 'relative';
                header_toptit.style.backgroundColor="";
            }
            else if(scrollTop==0){
                header_toptit.style.backgroundColor="";
                for(var i=0;i<tit_name.length;i++){
                    tit_name[i].style.color="white";
                    index_logo.src="../img/protect_images/logo.png";
                    for(var j=0;j<index_nav_tit_itemTxt.length;j++){
                        index_nav_tit_itemTxt[j].style.color="RGBA(150,150,150,255)";
                    }
                }
            }
            else{
                header_toptit.style.position = 'fixed';
                header_toptit.style.backgroundColor="RGBA(255,255,255,1)";
                index_logo.src="../img/first_images/iphone_logo02.png";

                for(var i=0;i<tit_name.length;i++){
                    tit_name[i].style.color="black";
                }

            }
        }
        console.log("当前滚动条位置："+scrollTop);
    }


//王美玲部分
function getObj(id){
    return document.getElementById(id);
}
//获取样式表样式
function getStyle(obj,attr){
//        document.all为判断IE浏览器的条件
    if(document.all){
//            兼容IE8及以下版本
        return parseInt(obj.currentStyle[attr]);
    }else{
//            兼容火狐和谷歌
        return parseInt(getComputedStyle(obj,false)[attr]);
    }
}

//moveing滚动效果
function moving(obj,speed,terminal){
    clearInterval(obj.timer);
    obj.timer=setInterval(function(){
        var left_val=getStyle(share,"left");
        if(left_val<terminal){
            if(left_val<terminal){
                left_val+=speed;
            }
        }else{
            if(left_val>terminal){
                left_val+=speed;
            }
        }
        share.style.left=left_val+"px";
    },17)
}


//石玲玲

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






