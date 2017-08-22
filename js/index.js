
// 主页导航标题固定窗体位置事件（使用window.onscroll全局事件监听）

window.onscroll=function () {
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
    var tab_items_left=[0,-1100,-2200,-3300,-4400];//轮播内容位置



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




    // index-header_active：最新动态轮播开始------------

    var active_titdiv=document.getElementsByClassName("active_titdiv");
    var active_a_other=document.getElementsByClassName("active_a_other");
    var active_bottom=parseInt(active_titdiv[0].style.bottom);
    setInterval(function () {
        if(active_bottom=="0"){
            change();
        }
        else
        {
            active_bottom=parseInt(active_bottom);
            clearInterval(timer_active);
            timer_active=setInterval(function () {
                if(active_bottom>0){
                    active_bottom-=1;
                }
                else
                {
                    clearInterval(timer_active);
                }
                for(var i=0;i<active_titdiv.length;i++){
                    active_titdiv[i].style.bottom=active_bottom+"px";
                }

            },20);

        }
    },4000);

    var timer_active=null;
    function change() {
        active_bottom=parseInt(active_bottom);
        clearInterval(timer_active);
        timer_active=setInterval(function () {
            if(active_bottom<40){
                active_bottom+=1;
            }

            else
            {
                clearInterval(timer_active);
            }
            for(var i=0;i<active_titdiv.length;i++){
                active_titdiv[i].style.bottom=active_bottom+"px";
            }
        },20);
    }




    // index-header_active：最新动态轮播结束------------




    /*index-center_up：主页轮播选项卡开始-------*/

    // 添加鼠标移动事件
    for(var i=0;i<tab_icoPic.length;i++){
        (function(n){
            tab_icoPic[n].onmousemove= function () {
                console.log(tab_icoPic.length);
               clearInterval(timer_icoCar);
                tab_items_car.style.left=tab_items_left[n]+"px";
                tab_icoPicChange();
                tab_icoPic[n].src=tab_icoList[n];

                console.log("现在指向的是："+tab_icoPic[n].src)
            }
            tab_icoPic[n].onmouseout=function(){

                clearInterval(timer_icoCar);
                timer_icoCar=setInterval(function () {
                    if(n==5){

//                        tab_icoPic[n].src=tab_icoList[n];
                        n=0;
//                        tab_icoPic[n].src=tab_icoList[n];
//                        tab_icoPic[n].setAttribute("src",tab_icoListOld[n]);

                    }
                    else
                    {
                        for(var i=0;i<tab_icoPic.length;i++){
                            tab_icoPic[i].setAttribute("src",tab_icoListOld[i]);
                        }
                        tab_icoPic[n].src=tab_icoList[n];
                        tab_items_car.style.left=tab_items_left[n]+"px";
                        n++;
                    }
                    console.log(n);
                },2000);
            }
        })(i);
    }

    //还原原图标
    function tab_icoPicChange() {
        for(var i=0;i<tab_icoPic.length;i++){
            tab_icoPic[i].setAttribute("src",tab_icoListOld[i]);
        }
    }


    var timer_icoCar=null;
    var n=0;
    timer_icoCar=setInterval(function () {

        if(n==5){
            n=0;
            tab_icoPic[n].src=tab_icoList[n];

            tab_icoPic[n].setAttribute("src",tab_icoListOld[n]);
        }
        else
        {
            for(var i=0;i<tab_icoPic.length;i++){
            tab_icoPic[i].setAttribute("src",tab_icoListOld[i]);
            }
            tab_icoPic[n].src=tab_icoList[n];
            tab_items_car.style.left=tab_items_left[n]+"px";
            n++;
        }


        console.log(n);
},1500);



    /*主页轮播选项卡结束-------*/






}
