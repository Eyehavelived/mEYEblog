$(window).scroll(function(){
    $(".tab-pane fade").css("opacity", 1 - $(window).scrollTop() / 250);
  });