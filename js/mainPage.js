/**
 * Created by YT on 2018/7/6.
 */

// 滚动条控制顶部导航颜色
$(window).scroll(function(){
    if($(window).scrollTop() >= 500){
        $("#header").css("background","black");
    }
    if($(window).scrollTop() < 500) {
        $("#header").css("background-color", "transparent");
    }
});

window.onload=function () {
    $("#xyd>ul>li:nth-child(1)").css("background-color", "whitesmoke");
    $("#bpt").css("transition","all 2s");
}

// 控制轮播图
var mm = new  Array("img/slide6.jpg","img/slide8.jpg","img/slide9.jpg");
var i=0;
var clear=null;
clear = setInterval("lbt(100),cln()",0);
function lbt(x) {
    clearInterval(clear);
    clear = setInterval("lbt(100),cln()",4000);
    if (i==3)i=0;
    if (x<3)i=x;
    if(x!=999){
        $("#xyd>ul>li:nth-child("+(i+1)+")").css("background-color", "whitesmoke");
        console.log("#xyd>ul>li:nth-child("+i+")"+"  i的值"+i);
        $("#bpt").css("background-image","url("+mm[i]+")");
        i++;
    }
}
// 让其他的透明
function cln(o) {
    var iii =0;
    if (o==undefined){
        for(iii=0;iii<3;iii++){
            if((iii+1)!=i)
                $("#xyd>ul>li:nth-child("+(iii+1)+")").css("background-color", "transparent");
        }
    }else {
        $("#xyd>ul>li:nth-child("+i+")").css("background-color", "transparent");
    }
    console.log("iii里面的i="+i);
}

// $("#bpt").css("background-image","url(img/slide8.jpg)");