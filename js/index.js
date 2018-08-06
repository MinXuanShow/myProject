$("h1.boxText").hover(
    function(){
        var $h1=$(this);
        $h1.toggleClass("bg");
        $h1.children("div").toggleClass("orange");
        $h1.children("div").children("span").toggleClass("fontcolor");
    });
/*轮播图效果*/
var timer=null
function move(){//封装轮播函数
    var imgIcd=$("[data-load=bannerInds]>span.hover");
    var img=$("img.show");//找到第一张图片
    img.removeClass("show");//先移除第一张的class
    imgIcd.removeClass("hover");
    img.next().addClass("show");//给下一个加class
    imgIcd.next().addClass("hover");
    //这里可以输出所有img观察class的变化
    //console.log($("[data-load=bannerInds]").children());
    // console.log($("div.img").children());
    //如果所有img都没有class “show”的时候就给第一个加show
    if(!$("div.img").children().hasClass("show")){
        // console.log(1);
        $("div.img").children().first().addClass("show");
        $("[data-load=bannerInds]").children().first().addClass("hover");
    }
    /*var img=$("div.img").children().first();
    img.next().toggleClass("in");
    console.log(img.next());*/
}
function automove(){
    timer=setInterval(function(){move();},3000)
}
automove();
//--------------鼠标hover效果--------------------
$("div.banner").hover(function(){
    clearInterval(timer);//当鼠标移入停止轮播定时器
    timer=null;
},function(){//移出的时候又启动
    automove();
})
//-------------------左右按键切换效果-----------------------------
var left=$("#ck-left");
var right=$("#ck-right");
right.click(function(e){
    e.preventDefault();
    move();
});
left.click(function(e){//这里就是把move（）函数反过来而已
    e.preventDefault();
    var imgIcd=$("[data-load=bannerInds]>span.hover");
    var img=$("img.show");
    img.removeClass("show");
    imgIcd.removeClass("hover");
    img.prev().addClass("show");
    imgIcd.prev().addClass("hover");
    //console.log($("div.img").children());
    if(!$("div.img").children().hasClass("show")){
        $("div.img").children().last().addClass("show");
        $("[data-load=bannerInds]").children().last().addClass("hover");
    }
})
//	----------------------图片导航点击按钮组------------------------------
$("div.pic-boxNav>span").click(function(){
    var span=$(this);
    span.addClass("have").siblings().removeClass("have");
})
//	楼层滚动
var oNav = $('#LoutiNav'); //导航壳
var aNav = oNav.find('li'); //导航
var aDiv = $('#main .louceng'); //楼层
console.log(aDiv);
var oTop = $('#goTop'); //回到顶部
$(window).scroll(function() {
    //可视窗口高度
    var winH = $(window).height();
    console.log("可视窗口高度一半"+winH/2);
    //鼠标滚动的距离
    var iTop = $(window).scrollTop();
    console.log("鼠标滚动距离"+iTop);
    var $height=$("#header").height();
    console.log($height+1200+"头部高度");
    if(iTop >=$height+1200) {
        oNav.fadeIn();
        oTop.fadeIn();
        //鼠标滑动样式改变

        aDiv.each(function() {//遍历楼层
            console.log($(this).offset());
            console.log("当前位置"+$(this).offset().top);
            console.log(winH + iTop - $(this).offset().top);
            console.log($(this));
            if(winH + iTop - $(this).offset().top > winH / 2) {
                console.log($(this).index());
                aNav.removeClass('active');
                aNav.eq($(this).index()).addClass('active');
            }
        })
    } else {
        oNav.fadeOut();
        oTop.fadeOut();
    }
})
//点击回到当前楼层
aNav.click(function() {
    var t = aDiv.eq($(this).index()).offset().top;
    $('body,html').animate({
        "scrollTop": t
    }, 500);
    // $(this).addClass('active').siblings().removeClass('active');
});
//回到顶部
oTop.click(function() {
    $('body,html').animate({
        "scrollTop": 0
    }, 500)
})