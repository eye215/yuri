// JavaScript Document

var now1=0;
var now2=0;
var now3=0;
var now4=0;
var now5=0;

var slide_rank_num =9;
var issue_list_num=2;
var pic_slide_left1_num=1;
var pic_slide_right1_num=1;
var table=1;

$(document).ready(function(){
$("#bar_popup>.bar_wrap>.bar_popup_text>.bar_popup_button").click(function(){
       $("#bar_popup").css({"margin-top":"-40px"});
    });




start();


})

/*
$(".next").click(function(){next();});
$(".prev").click(function(){prev();});
$(".next").click(function(){
    if(!$(".contents_right_contents4>table").last().is(":visible")){
        $(".contents_right_contents4>table:visible").hide().next("table").fadeIn("40");
        $(".prev").removeClass("off");
    }
    if($(".contents_right_contents4>table").last().is(":visible")){
        $(".next").addClass("off");
    }
    return false;

    });
    $(".prev").click(function(){
       if(!$(".contents_right_contents4>table").first().is(":visible")){
            $(".contents_right_contents4>table:visible").hide().prev("table").fadeIn("40");
            $(".next").removeClass("off");
        }
        if($(".contents_right_contents4>table").first().is(":visible")){
            $(".prev").addClass("off");
        }
        return false;
      
    
    });

*/

function start(){
    $(".nav_menubar_rank>li").eq(0).siblings().css({"margin-left":"-1000px","display":"none"});
    setInterval(function(){slide_rank();},2000);

    $(".issue>li").eq(0).siblings().css({"margin-left":"-1000px","display":"none"});
    setInterval(function(){slide_issue();},2000);

    $(".pic_slide>li").eq(0).siblings().css({"margin-top":"-5000px"});
    setInterval(function(){slide_pic_left1();},6000);

    $(".slide_2>li").eq(0).siblings().css({"margin-top":"-5000px"});
    setInterval(function(){slide_pic_right1();},5000);

}

function slide_rank(){
now1=now1==slide_rank_num?0:now1+=1;
$(".nav_menubar_rank>li").eq(now1-1).css({"margin-left":"-1000px","display":"none"});
$(".nav_menubar_rank>li").eq(now1).css({"margin-left":"0px","display":"block"});

}

function slide_issue(){
    now2=now2==issue_list_num?0:now2+=1;
    $(".issue>li").eq(now2-1).css({"margin-left":"-1000px","display":"none"});
    $(".issue>li").eq(now2).css({"margin-left":"0px","display":"block"});
    }

function slide_pic_left1(){
    now3=now3==pic_slide_left1_num?0:now3+=1;
    $(".pic_slide>li").eq(now3-1).css({"margin-top":"-5000px"});
    $(".pic_slide>li").eq(now3).css({"margin-top":"0px"});
    }

    function slide_pic_right1(){
        now4=now4==pic_slide_right1_num?0:now4+=1;
        $(".slide_2>li").eq(now4-1).css({"margin-top":"-5000px"});
        $(".slide_2>li").eq(now4).css({"margin-top":"0px"});
        }

  
function  prev(){
    $(".contents_right_contents4>table").eq(0).siblings().css({"display":"none"});
    
        now5=now5==table?0:table-=1;
        $(".contents_right_contents4>table").eq(now5-1).css({"display":"none"});
        $(".contents_right_contents4>table").eq(now5).css({"display":"block"});
        }
        function  next(){
            $(".contents_right_contents4>table").eq(0).siblings().css({"display":"none"});
            now5=now5==table?0:table-=1;
                    $(".contents_right_contents4>table").eq(now5-1).css({"display":"none"});
                    $(".contents_right_contents4>table").eq(now5).css({"display":"block"});
                    }