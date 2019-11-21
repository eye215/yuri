
var now=0;
var imgs=2;

var now_menu=0;
var menu=1;

$(document).ready(function(){
    $('.menu_button').click(
        function(){
            click();
        }
    )

    $(".main_nav>li").mouseover(
        function(){
            $(".sub_nav").stop().slideDown();
            $(".menu_bg").stop().slideDown();
            $(this).children(".sub_nav").addClass("subnav_bar");
            
        });
    $('.main_nav>li').mouseleave(
        function(){
            
            $(".sub_nav").stop().slideUp();
            $(".menu_bg").stop().slideUp();
            $(this).children(".sub_nav").removeClass("subnav_bar");
            
        }
    );
    $(".slide_icons_a").mouseover(
        function(){
            $(this).children(".slide_icons_a>.left_to_right").stop().animate({"left":"0"},400)});
        
    $(".slide_icons_a").mouseleave(
        function(){
            $(this).children(".slide_icons_a>.left_to_right").stop().animate({"left":"-100%"},400)});

            $(".slide_icons").mouseover(
        function(){
            $(this).children(".slide_icons>.slide_icons_a").stop().animate({"bottom":"40%"},400)
            
        });
        
    $(".slide_icons").mouseleave(
        function(){
            $(this).children(".slide_icons>.slide_icons_a").stop().animate({"bottom":"0"},400)});


    $(".img_icons").mouseover(
        function(){
            $(this).children(".left_to_right").stop().animate({"left":"0"},400)});
        
    $(".img_icons").mouseleave(
        function(){
            $(this).children(".left_to_right").stop().animate({"left":"-100%"},400)});

    $(".img_icons").mouseover(
        function(){
            $(this).children(".border.aa").stop().animate({"left":"0"},400,
            function(){$(this).siblings(".border.bb").stop().animate({"top":"0"},400,
            function(){$(this).siblings(".border.cc").stop().animate({"left":"0"},400,
            function(){$(this).siblings(".border.dd").stop().animate({"top":"0"},400);});});});

            return false;
        });
 
    $(".img_icons").mouseleave(
        function(){
            
            $(this).children(".border.dd").stop().animate({"top":"100%"},400);
            $(this).children(".border.cc").stop().animate({"left":"-100%"},400);
            $(this).children(".border.bb").stop().animate({"top":"-100%"},400);
            $(this).children(".border.aa").stop().animate({"left":"100%"},400);
            
        });
    

        $(".edu_box").mouseover(
            function(){
                
                $(this).children(".border.aa").stop().animate({"left":"0"},400,
                function(){$(this).siblings(".border.bb").stop().animate({"top":"0"},400,
                function(){$(this).siblings(".border.cc").stop().animate({"left":"0"},400,
                function(){$(this).siblings(".border.dd").stop().animate({"top":"0"},400);});});});
    
                return false;
            });
     
        $(".edu_box").mouseleave(
            function(){
                
                $(this).children(".border.dd").stop().animate({"top":"100%"},400);
                $(this).children(".border.cc").stop().animate({"left":"-100%"},400);
                $(this).children(".border.bb").stop().animate({"top":"-100%"},400);
                $(this).children(".border.aa").stop().animate({"left":"100%"},400);
                
            });
          

            $(".icons").mouseover(
                function(){
                    $(this).children(".border.a").stop().animate({"left":"4%"},400,
                    function(){$(this).siblings(".border.b").stop().animate({"top":"0"},400);})
                    $(this).children(".border.c").stop().animate({"left":"0"},400,
                    function(){$(this).siblings(".border.d").stop().animate({"top":"4%"},400);});
        
                    return false;
                });
         
            $(".icons").mouseleave(
                function(){
                    
                    $(this).children(".border.d").stop().animate({"top":"100%"},400);
                    $(this).children(".border.c").stop().animate({"left":"-100%"},400);
                    $(this).children(".border.b").stop().animate({"top":"-100%"},400);
                    $(this).children(".border.a").stop().animate({"left":"100%"},400);
                    
                });

           start();
            

        });
function click(){
    now_menu=now_menu==menu?0:now_menu+=1;
    if(now_menu==now){$('nav').css({"display":"none"}),
        $('.logo_w').css({"display":"none"}),
        $('.logo_b').css({"display":"block"})
        $('.on').css({"display":"block"}),
        $('.off').css({"display":"none"})
    }
    else{$('nav').css({"display":"block"}),
    $('.logo_w').css({"display":"block"}),
    $('.logo_b').css({"display":"none"})
    $('.on').css({"display":"none"}),
        $('.off').css({"display":"block"})
}
        
    }


function start(){
    
    setInterval(function(){slide();},3000);
   
}
function slide(){
    now=now==imgs?0:now+=1;
    $(".slide_imgs>li").eq(now).siblings().fadeIn('1500');
    $(".slide_imgs>li").eq(now-1).siblings().fadeOut('1500');
   
}