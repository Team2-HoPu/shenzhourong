    window.onload=function() {
        var timer = null;
        var timer1 = null;
        var next = getObj("next");
        var prev = getObj("prev");
        var production_third_carousel = getObj("production_third_carousel");
        var dl_img = document.getElementsByClassName("production-second_left_img1");
//        var word = dl_img.getElementsByClassName("on_img_title");

        prev.addEventListener('click', function () {
            moving(1200, 0, -2400);

        });
        next.addEventListener('click', function () {
            moving(-1200, -2400, 0);
        });

        function moving(speed, terminal, flag) {
            var left_value = parseInt(production_third_carousel.style.left);
//            console.log(left_value);
            if (left_value === terminal) {
                left_value = flag;

            } else {
                left_value += speed;
            }
            production_third_carousel.style.left = left_value + "px";
            for (var i = 0; i < dl_img.length; i++) {
                dl_img[i].setAttribute("id", "")
            }

            dl_img[left_value / -1200].setAttribute("id", "on");
        }

        function span_control(that, num) {
            for (var i = 0; i < dl_img.length; i++) {
                dl_img[i].setAttribute("id", "");
            }
//            console.log(dl_img[i]);
            that.setAttribute("id", "on");
            production_third_carousel.style.left = num * (-1200) + "px";
        }
        for (var i = 0; i < dl_img.length; i++) {
            (function (n) {
                dl_img[n].onmouseover = function () {
                    clearInterval(timer);
                    clearInterval(timer1);
                    span_control(this, n)
                }
                dl_img[n].onmouseout = function () {
                    span_control(this, n)
                }

            })(i)
        }


        timer = setInterval(function () {
            moving(-1200, -2400, 0);
        }, 2000);
            getObj("production_third_content").onmouseover = function () {
                clearInterval(timer);
                clearInterval(timer1);
            };
            getObj("production_third_content").onmouseout = function () {
                timer1 = setInterval(function () {

                    moving(-1200, -2400,"0");
                }, 2000);
            };
        };



