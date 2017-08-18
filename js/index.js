window.onload=function () {

//获取元素ID、定义
    /*index:top顶部图片轮播*/
    var head_btnLeft=getId("index-header_btnLeft");//header轮播左按钮
    var head_btnRight=getId("index-header_btnRight");//header轮播右按钮
    var head_btnIco=document.getElementsByTagName("span");//header轮播圆点按钮
    var head_topCar=getId("index-header_toppic");//header轮播图片
    var index_header=getId("index-header");//header整个大盒子
    var timer=null;//header图片轮播定时1
    var timer1=null;//header图片轮播定时2

    /*index:center中部选项卡轮播*/
    var tab_icoPic=document.getElementsByClassName("tab_icoPic");//选项卡轮播图标集
    var tab_items_car=getId("tab_items_car");//选项卡轮播内容Id
    var tab_icoList=[
        "../img/first_images/icon1.png",
        "../img/first_images/icon2.png",
        "../img/first_images/icon3.png",
        "../img/first_images/icon4.png",
        "../img/first_images/icon5.png"
    ];//图标轮播变化图标
    var tab_icoListOld=[
        "../img/first_images/icon2-2.png",
        "../img/first_images/icon3-3.png",
        "../img/first_images/icon102.png",
        "../img/first_images/icon5-5.png",
        "../img/first_images/icon1-5.png"
    ];//图标轮播原始图标
    var tab_items_left=[0,-1100,-2200,-3300,-4400];//原始



//开始事件部分
    /*index:top顶部图片轮播事件*/

//设置鼠标指向index-header_topPic轮播事件
    index_header.addEventListener("mouseover", function () {
        var header_btn=document.getElementsByClassName("index-header_btn");
        for(var i=0;i<header_btn.length;i++){
            header_btn[i].style.display="block";//设置左右轮播按钮display属性
        }
        clearInterval(timer);//清除自动轮播指向定时器
        clearInterval(timer1);//清除自动轮播移出的定时器
    });
//    header图片轮播鼠标移动事件,控制定时器
    index_header.addEventListener("mouseout", function () {
        var header_btn=document.getElementsByClassName("index-header_btn");
        for(var i=0;i<header_btn.length;i++){
            header_btn[i].style.display="none";//设置左右轮播按钮display属性
        }
        clearInterval(timer);//清除自动轮播指向定时器
        clearInterval(timer1);//清除自动轮播移出的定时器
        timer1=setInterval(function () {
            span_btnIco(slide(head_topCar,-1900,-3800,"0px"));
        },3000);//设置移出轮播后继续执行自动轮播
    });
//    header左右轮播鼠标指向事件
    head_btnLeft.addEventListener("mouseover",function () {
        head_btnLeft.setAttribute("title","上一张");
        head_btnLeft.style.backgroundColor="rgba(0,0,0,0.2)";
    });
    head_btnRight.addEventListener("mouseover",function () {
        head_btnRight.setAttribute("title","下一张");
        head_btnRight.style.backgroundColor="rgba(0,0,0,0.2)";
    });
    head_btnLeft.addEventListener("mouseout",function () {
        head_btnLeft.style.backgroundColor="";

    });
    head_btnRight.addEventListener("mouseout",function () {
        head_btnRight.style.backgroundColor="";
    });
//    轮播按钮选中状态事件
    function span_btnIco(left_value){

        //在修改class前，清空所有class；
        for(var i=0;i<head_btnIco.length;i++){
            head_btnIco[i].setAttribute("class","");
        }
        //点击span修改class为“on”；
        head_btnIco[left_value/-1900].setAttribute("class","on");
    }
//    header左右轮播点击事件
    head_btnLeft.addEventListener("click",function () {

       var left_value= slide(head_topCar,1900,0,"-3800px");
        span_btnIco(left_value);

    });
    head_btnRight.addEventListener("click",function () {
      var  left_value=slide(head_topCar,-1900,-3800,"0px");
        span_btnIco(left_value);
    });
    //添加span圆点按钮事件
    for(var i=0;i<head_btnIco.length;i++){
        (function(n){
            head_btnIco[n].onclick=function(){
                head_btnCtrl(this,n);
            }
        })(i)
    }
    //主页top轮播圆点按钮切换控制
    function head_btnCtrl(that,num) {
        //在修改class前，清空所有class；
        for(var i=0;i<head_btnIco.length;i++){
            head_btnIco[i].setAttribute("class","");
        }
        //点击span修改class为“on”；
        that.setAttribute("class","on");
        //控制图片移动到当前位置
        head_topCar.style.left=num*(-1900)+"px";
    }
//    index-header_topPic自动轮播
    timer=setInterval(function(){
        span_btnIco(slide(head_topCar,-1900,-3800,"0px"));
    },3000);//自动轮播

    /*index:top顶部图片轮播结束-----------*/

    /*index-center_up：主页轮播选项卡开始-------*/

    for(var i=0;i<tab_icoPic.length;i++){
        (function(n){
            tab_icoPic[n].onmousemove= function () {
                tab_items_car.style.left=tab_items_left[n]+"px";
                tab_icoPicChange();
                tab_icoPic[n].src=tab_icoList[n];
            }
        })(i);
    }
    //还原原图标
    function tab_icoPicChange() {
        for(var i=0;i<tab_icoPic.length;i++){
            tab_icoPic[i].setAttribute("src",tab_icoListOld[i]);
        }

    }



}
