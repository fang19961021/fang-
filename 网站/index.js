$(function(){
//页面1下载功能
$(".down_peo .down").on("click",function(e){
    e.stopPropagation();
    var _index = $(this).index();
    $(this).css({"background":"#8ea3d0","color":"#fff"}).siblings().css({"background":"rgba(0,0,0,0.33)","color":"#ccc"});
    if($(".down_container .down_content").eq(_index).css("display") == "block"){
    	$(this).siblings().css({"background":"#8ea3d0","color":"#fff"});
    }
    $(".down_container .down_content").eq(_index).slideToggle().siblings(".down_content").hide();
})




var preScroll = 0;
var curScroll = $(document).scrollTop();
 var playVideo = $("#playVideo").get(0);
 playVideo.muted = true;
//头部导航栏自动下拉动画
function navanim(){
	$(".slide_wrapper").slideUp("slow");
    curScroll = $(document).scrollTop();
    if(curScroll - preScroll > 0 ){
    	$("nav").removeClass("slideInDown").addClass("animate slideInUp");
    }else if(curScroll - preScroll < 0){
    	$("nav").removeClass("slideInUp").addClass("animate slideInDown");
    }
    preScroll = curScroll;
}
function anim(){
	//当窗口滚动到#view2中间和#view3的上面时自动播放无声视频
	if(curScroll >= $("#view2").offset().top - $("#view2").height()/2 && curScroll <=$("#view3").offset().top){
		setTimeout(function(){
			playVideo.play();
		},800);
	}else{
		playVideo.pause();

	}
//导航栏动画
    if(curScroll >=$("#view1").height() && curScroll <= $("#view5").offset().top){
    	$("nav").addClass("nactive");
    	$(".logo").addClass("bj");
    	$(".nav_hover li").find("a").addClass("navs");
    }else {
    	$("nav").removeClass("nactive");
    	$(".logo").removeClass("bj");
    	$(".nav_hover li").find("a").removeClass("navs");
    }
//页面3动画
    if(curScroll >= $("#view3").offset().top - $("#view3").height()*3/4 && curScroll <= $("#view3").offset().top + $("#view3").height()/2) {
            $('.promisePhotoWrap img').removeClass('animated slideInDown_yf').addClass('animated slideInUp_yf');
         }else if(curScroll<=$("#view2").offset().top||curScroll>=$("#view4").offset().top- $("#view3").height()*0.6){
            $('.promisePhotoWrap img').removeClass('animated slideInUp_yf').addClass('animated slideInDown_yf');
         }
//页面4动画
    if(curScroll >= $("#view4").offset().top - $("#view4").height()*3/4 && curScroll <= $("#view4").offset().top + $("#view4").height()/2){
    	$(".introduceImg img" ).removeClass("animated zoomOut").addClass("animated zoomIn_yf");
    }else{
    	$(".introduceImg img" ).removeClass("animated zoomIn_yf").addClass("animated zoomOut");
    }
}
anim()
     //滚轮监听事件
      if(window.addEventListener) {
        document.addEventListener("DOMMouseScroll",function() {
            navanim();
            anim();
        },false);
    }
    
    if(document.onmousewheel){
        document.onmousewheel = function() {
            navanim();
            anim();
        }
    }
    $(document).bind('wheel', bb);
    function bb(){
        navanim();
        anim();
    }
//头部导航栏
$(".nav_hover li").not(".last_link").on("click",function(e){
    $(this).find("a").addClass("active_color").parent().siblings("li").find("a").removeClass("active_color");
    e.stopPropagation();
    anim();
    n_index = $(this).index();
    $(this).find("a").addClass("sactive").parent().siblings("li").find("a").removeClass("sactive");
    if(n_index != 1){
        $(".slide_wrapper").slideUp("slow");
        $("nav").removeClass("nactive");
        $(".logo").removeClass("bj");
        $(".nav_hover li").find("a").removeClass("navs");
    } else if(n_index == 1){
        //下载APP下拉菜单
        $(".slide_wrapper").slideToggle("slow");
        $("nav").addClass("nactive");
        $(".logo").addClass("bj");
        $(".nav_hover li").find("a").addClass("navs");
    }
    if(n_index == 0){
        mScroll = $("#view1").offset().top;
        $("html,body").animate({
            scrollTop : mScroll
        },800);
    } else if(n_index == 2){
        mScroll = $("#view5").offset().top;
        $("html,body").animate({
            scrollTop : mScroll
        },800);
    }

})
var timer = null;
$(".playBtn").on("click",function(e){
    e.stopPropagation();
    playVideo.muted = false;
    playVideo.setAttribute("src","erbao.mp4");
    $(".mask").fadeOut("slow");
    $("#close_btn").show();
    setTimeout(function(){
        playVideo.play();
    },800);
    timer = setInterval(function(){
        if(playVideo.currentTime == playVideo.duration){
            $(".mask").fedeIn("slow");
            $("#close_btn").hide();
            clearIntervel(timer);
            playVideo.setAttribute("src","erbao.mp4");
            playVideo.muted = true;
            setTimeout(function(){
                playVideo.paly()
            },800);
        }
    },1000);
})
$("#close_btn").on("click",function(e){
    e.stopPropagation();
    $(".mask").fadeIn("slow");
    $("#close_btn").hide();
    playVideo.muted = true;
    setTimeout(function(){
        playVideo.paly();
    },800);
});
$(".aboutDiv").on("click",function(e){
    e.stopPropagation();
    $(".about_join").fadeOut(500,"swing");
    $(".about").fadeIn(500,"swing");
    $(".aboutContent").show();
    $(".joinContent").hide();
    $(".about h2").html("关于我们");
})
$(".aboutButton").on("click",function(e){
    e.stopPropagation();
    $(".about").fadeOut(500,"swing");
    $(".about_join").fadeIn(500,"swing");
})
$(".joinDiv p").on("click",function(e){
    e.stopPropagation();
    $(".about_join").fadeOut(500,"swing");
    $(".about").fadeIn(500,"swing");
    $(".aboutContent").hide();
    $(".joinContent").show();
    $(".about h2").html("加入我们");
    $(".workListButton").eq($(this).index()-1).addClass("workButtonActive").siblings().removeClass("workButtonActive");
    $(".requestList").eq($(this).index()-1).addClass("requestListActive").siblings().removeClass("requestListActive");
})
$(".workListButton").on("click",function(){
    $(this).addClass("workButtonActive").siblings().removeClass("workButtonActive");
    $(".requestList").eq($(this).index()).addClass("requestListActive").siblings().removeClass("requestListActive");
})
})