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

    //    获得dl标签

    var list_dl = document.getElementsByTagName("dl");
    var list_dt = document.getElementsByTagName("dt");
//    获得list_introduce文字标签
    var list_introduce = document.getElementsByClassName("list_introduce");
    console.log(getComputedStyle(list_dl[0]).border);
    // list_dl[1].addEventListener("mouseover",function () {
    //     check()
    // });
    check();
    function check() {
        for (var i = 0; i < list_dl.length; i++) {
            (function (n) {
//            var list_dl_val=getComputedStyle(list_dl[n]).border;
                list_dl[n].onmousemove = function () {
                    for (var i = 0; i < list_dt.length; i++) {
                        list_dt[i].style.border = "2px solid slategrey";
                        list_introduce[i].style.display = "none";
                    }
                    list_dt[n].style.border = "2px solid #E58E43";
                    list_introduce[n].style.display = "block";
                };
                // list_dl[n].onmousemove = function () {
                //     for (var i = 0; i < list_dt.length; i++) {
                //         list_introduce[i].style.display = "none";
                //     }
                //     list_introduce[n].style.display = "block";
                // }
            })(i);
        }

    }
};


