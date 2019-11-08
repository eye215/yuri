// JavaScript Document

var imgs=1;
var now=0;

$(document).ready(function(){
	$(".main_menu>li").mouseover(function(){
		$(this).children(".sub_menu").stop().slideDown()
	});
	$(".main_menu>li").mouseleave(function(){
		$(this).children(".sub_menu").stop().slideUp()
	});
	$(".popp").click(function(){
		$("#contents_pop").css({"display":"block"});
		$("#wrap2").css({"display":"block"})
	});
		$(".close").click(function(){
		$("#contents_pop").css({"display":"none"});
		$("#wrap2").css({"display":"none"});
		});
	start();

});

function start(){
	$("#main_img>ul>li>img").eq(0).siblings().css({"margin-left":"-2000px"});
	setInterval(function(){slide();},2000);
}
function slide(){
	now=now==imgs?0:now+=1;
	$("#main_img>ul>li>img").eq(now-1).css({"margin-left":"-2000px"});
	$("#main_img>ul>li>img").eq(now).css({"margin-left":"0px"});
}

var win;
function winOpen(){
	win = window.open('contact.html','child','toolbar=no,width=500,height=300')}