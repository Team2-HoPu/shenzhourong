/**
 * Created by Administrator on 2017/8/19 0019.
 */
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

