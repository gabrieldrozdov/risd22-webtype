/* Scroll with mouse movement */
$(document).mousemove(function(e) {
    if($(window).width() >= 1000){
      var percentH = (e.clientY-50) / $(window).height();
      var percentW = (e.clientX) / $(window).width()/1.5;
      $('body, html').scrollTop($(document).height() * percentH);
      $('body, html').scrollLeft($(document).width() * percentW);
    }
});