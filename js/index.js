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

//    var dl_list=document.getElementsByTagName("dl");
//    var dl_list_dt=document.getElementsByTagName("dt");
////var dl_list_dd=document.getElementsByTagName("dd")[0];
//
//    for (var i = 0; i < dl_list.length; i++) {
//        (function (n) {
//            dl_list[i].onclick = function () {
//                console.log(getComputedStyle(dl_list_dt).border= 3+"px");
//            }
//        })(i);
//    }
};


    //var dl_list_dt_border0=getComputedStyle(dl_list_dt).border;
    //console.log(dl_list_dt_border0);

