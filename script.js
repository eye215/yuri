// JavaScript Document
$(document).ready(function() {
    $(".main_menu>li").mouseover(
	function(){
		$(this).children(".sub_menu").stop().slideDown();
		});
		
		 $(".main_menu>li").mouseleave(
	function(){
		$(this).children(".sub_menu").stop().slideUp();
		});
		

		
			
});