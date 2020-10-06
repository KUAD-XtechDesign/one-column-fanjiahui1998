$(function(){

    $(".img_button").on("click",function(){
        $(this).siblings(".content").slideToggle();
      })
    
    $(".close_button").on("click",function(){
        $(this).parent(".content").slideUp();
    })
      
});

$(document).ready(function(){
    $("button").click(function(){
      $("#img01").fadeIn();
      $("#img02").fadeIn("slow");
      $("#img03").fadeIn(3000);
    });
  });


