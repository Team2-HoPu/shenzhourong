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
