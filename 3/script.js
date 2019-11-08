// JavaScript Document

var num=0;
var img=2;

$(document).ready(function(){
	$(".main_navi>li").mouseover(function(){
		$(this).children(".sub_navi").stop().slideDown();
		});
		$(".main_navi>li").mouseleave(function(){
		$(this).children(".sub_navi").stop().slideUp();
		});
		
		$(".partner").click(function(){
			$("#partner_pop").css({"display":"block"});
			});
			$("#pop>button").click(function(){
			$("#partner_pop").css({"display":"none"});
			});
			


			});


            $( ".next" ).click(function() {
                if(!$("#img_slide li").last().is(":visible")){
                    $("#img_slide li:visible").hide().next("li").fadeIn("40");
                    
                }
               
                return false;
            });
            
            $( ".prev" ).click(function() {
                if(!$("#img_slide li").first().is(":visible")){
                    $("#img_slide li:visible").hide().prev("li").fadeIn("40");
                
                }
             
                return false;
			});
	