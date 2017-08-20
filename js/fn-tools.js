/**
 * Created by Administrator on 2017/8/18.
 */
window.onload=function(){
    var obtn=document.getElementById("sidabar-center-return");
    var clientHeight=document.documentElement.clientHeight;//可视区域的高度

    window.onscroll=function(){//onscroll为滚动滚动条事件，即这个函数在滚动条滚动时触发

        var osTop=document.documentElement.scrollTop||document.body.scrollTop;//scrollTop为滚动条滑动的距离
        if (osTop>=clientHeight) {
            obtn.style.display='block';
            obtn.addEventListener("click",function(){
                obtn.style.display='block';
                document.body.scrollTop-=100;
            });
        }
        else{
            obtn.style.display='none';
        }
    };

};