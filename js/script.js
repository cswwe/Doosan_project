document.addEventListener("DOMContentLoaded", function () {
	document.querySelector("#layer button").addEventListener("click", function () {
		document.querySelector("#layer").style.display = "none";
	});
});

$(function () {
	$(".full_menu, .nav li").mouseover(function () {
    $(".full_menu").stop().slideDown(600);
  });
	$(".full_menu, .nav li").mouseleave(function () {
    $(".full_menu").stop().slideUp(600);
  });
  $(".full_cover>ul>li").mouseover(function(){
    var i=$(this).index(); 
    $(".nav li").eq(i).find(".line").css("width","100%");
  })
  $(".full_cover>ul>li").mouseleave(function(){
    var i=$(this).index(); 
    $(".nav li").eq(i).find(".line").css("width","0%");
  })
  $(".nav li").mouseover(function(){
    $(this).find(".line").css("width","100%");
  })
  $(".nav li").mouseleave(function(){
    $(this).find(".line").css("width","0%");
  })
  $("#header .mo").click(function(){
    $(".mo_menu").stop().slideToggle("fast");
    $("#header .mo").css('color','red');
  })

  var i=0,k=null,repeat;
  timer();
  function timer(){
    setInterval(function(){
      i++;
      k=i-1;
      if(i == 3){
        i=0;
      }
      slide()
    },2000)
  }

  function slide(){
  $('.white_box').css("left","-100%").stop().animate({left:"0%"},1000, function(){
    $('.white_box').stop().animate({left:"100%"},500)
  })
   $('.slide_cover ul li').eq(i).addClass("on");
   $('.slide_cover ul li').eq(k).removeClass("on");
   $('.slide_cover ul li').eq(i).find(".img_logo").addClass("on");
   $('.slide_cover ul li').eq(i).find(".img_text").addClass("on");
   $('.slide_cover ul li').eq(i).find(".box").addClass("on");
   $('.slide_cover ul li').eq(i).find("a img").addClass("on");
   $('.slide_cover ul li a img').removeClass("on");


  }

}); 
