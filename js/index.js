function getId(id) {
    return document.getElementById(id) ? document.getElementById(id) : null;
}

function getStyle(obj, attr) {
    if (document.all) {
        return parseInt(obj.currentStyle[attr]);
    } else {
        return parseInt(getComputedStyle(obj, false)[attr]);
    }
}
window.onload=function() {
    var btn_idx;
    var content = getId("index_center_down");
    var prev = getId("left");
    var next = getId("right");
    var list = getId("index_carouse_img");
    //console.log(prev, next, list);
    var buttons = document.getElementsByTagName("span");
    function moving(speed, terminal, isLeft) {
        isLeft = isLeft ? 0 : -2400;
        var left_val = parseInt(list.style.left);
        //console.log(left_val);
        //console.log(left_val);
        if (left_val === terminal) {
            left_val = isLeft;
        } else {
            left_val += speed;
        }
        list.style.left = left_val + "px";
        //console.log(left_val + "px");


        btn_idx = Math.ceil(Math.abs(left_val / (1201)));
        console.log(btn_idx);
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].setAttribute("class", "");
        }
        buttons[btn_idx].setAttribute("class", "on");
    }
    next.addEventListener("click", function () {
        moving(-1200, -2400, true);
    }, true);
    prev.addEventListener("click", function () {
        moving(1200, 0, false);
    }, true);
    for (var i = 0; i < buttons.length; i++) {
        (function (n) {
            buttons[i].onclick = function () {
                list.style.left = n * (-1200) + "px";
                for (var i = 0; i < buttons.length; i++) {
                    buttons[i].setAttribute("class", "");
                }
                this.setAttribute("class", "on");
            }
        })(i);
    }
    var timer = null;
    var timer1 = null;
    timer = setInterval(function () {
        moving(-1200, -2400, true);
    }, 2000);
    var cont = getId("index_customer_carouse");
    cont.onmouseover = function () {
        clearInterval(timer1);
        clearInterval(timer);
    };
    cont.onmouseout = function () {
        clearInterval(timer1);
        timer1 = setInterval(function () {
            moving(-1200, -2400, true);
        }, 2000);
    };

    //最新活动
//获取class为index_left_title_li的li
    var list_index_left_ul_title=document.getElementsByClassName("index_left_title_li");
//获取class为index_left_title的ul
    var list_index_left_title=document.getElementsByClassName("index_left_title");
    console.log(list_index_left_title,list_index_left_ul_title);

    for (var i = 0; i < list_index_left_ul_title.length; i++) {
        (function (n) {
//            var list_dl_val=getComputedStyle(list_dl[n]).border;
            list_index_left_ul_title[n].onmousemove = function () {
                for (var i = 0; i < list_index_left_title.length; i++) {
                    list_index_left_title[i].style.display = "none";
                    list_index_left_ul_title[i].style.color="black";
                }
                list_index_left_title[n].style.display= "block";
                list_index_left_ul_title[n].style.color="skyblue";
            };
        })(i);

    }




    //人物切换
    var timer2 = null;
    var timer3 = null;
    //var btn_idx;
    //    人物简介文字
    var txt = document.getElementsByClassName("a");
    //    获取dl
    var dl = document.getElementsByTagName("dl");
    //    获取任务头像dt
    var dt = document.getElementsByTagName("dt");
    var click_obj=document.getElementsByClassName("test");
    //获取任务姓名dd
    var dd = document.getElementsByTagName("dd");
    //定义运动起点
    var start=0;
    //图片编号
    for(var k=0;k<5;k++){
        click_obj[k].idx=k;
    }
    for (var i = 0; i < txt.length; i++) {
        dd[i].index=dt[i].index = txt[i].index = i;
    }
    timer2 = setInterval(function () {
        trice(0);
    }, 2000);
    document.getElementById("index_characters_intro").onmouseover=function(e){
        clearInterval(timer2);
        if(e.target.nodeName=="IMG"){
            start= e.target.idx;
        }
    };
    document.getElementById("index_characters_intro").onmouseout=function(e){
        timer2=setInterval(function(){
            trice();
        },2000);
    };
    function trice() {
//            var num=++start_arg;
        var idx = start++% (txt.length);
        for (var i = 0; i < txt.length; i++) {
            txt[i].style.display = "none";
            dt[i].style.border="2px solid slategrey";
            dd[i].style.color="";
            for (var j = 0; j < dd.length; j++) {
                dd[j].style.color = "#ffffff";
            }
        }
        txt[idx].style.cssText = "color:orange;display:block;";
        dt[idx].style.border = "2px solid orange";
        dd[idx].style.color="orange";
    }
    for (var i = 0; i <dl.length; i++) {
        (function (n) {
            dl[n].onmousemove = function (e) {
                clearInterval(timer2);
                clearInterval(timer3);
                for (var i = 0; i <dt.length; i++) {
                    dt[i].style.border = "2px solid slategrey";
                    txt[i].style.display = "none";
                    dd[i].style.color="#ffffff";
                }
                dt[n].style.border = "2px solid #E58E43";
                txt[n].style.display = "block";
                dd[n].style.color="orange";
            };
        })(i);
    }
};



