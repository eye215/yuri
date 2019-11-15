// JavaScript Document

var now=0;
var imgs=1;

$(document).ready(function(){
	$(".main_navi>li").mouseover(function(){
		$(".sub_navi").stop().slideDown();
		});
		$(".main_navi>li").mouseleave(function(){
		$(".sub_navi").stop().slideUp();
		});
        


		$(".partner").click(function(){
			$("#partner_pop").css({"display":"block"});
			});
			$("#pop>button").click(function(){
			$("#partner_pop").css({"display":"none"});
			});
			
start();

			});


            
	function start(){
        $("#img_slide>li").eq(0).siblings().css({"margin-left":"-20000px"});
        setInterval(function(){$('#img_slide>li').click();}, 2000);
    }
    

    function slide(){
        now=now==imgs?0:now+=1;
        $("#img_slide>li").eq(now-1).css({"margin-left":"-20000px"});
        $("#img_slide>li").eq(now).css({"margin-left":"0px"});
    }

    $( ".next" ).click(function() {
        if(!$("#img_slide>li").last().is(":visible")){
            $("#img_slide>li:visible").hide().next("li").fadeIn("40");
            
        }
       
        return false;
    });
    
    $( ".prev" ).click(function() {
        if(!$("#img_slide>li").first().is(":visible")){
            $("#img_slide>li:visible").hide().prev("li").fadeIn("40");
        
        }
     
        return false;
    });