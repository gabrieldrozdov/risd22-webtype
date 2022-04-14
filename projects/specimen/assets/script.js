$(document).ready(function(){

  $('.letter').mousemove(function(event) {

      var rect = event.target.getBoundingClientRect();
      var x = event.clientX - rect.left; //x position within the element.
      var y = event.clientY - rect.top;  //y position within the element.

      let cursorX = event.pageX / $(this).width();
      let cursorY = y / $(this).height();

      let settingX = Math.floor(cursorX * 100);
      let settingY = Math.floor(cursorY * 100);

      $(".letter-glyph").css({
        "--FUNK": settingX,
        "--PRSS": settingY
      });
    
    });

  $('#letter-slider').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value
    // console.log(value);

    const slidertype = $(this).data('type'); //get slider axis

    $('.letter-glyph').text(String.fromCharCode(value));

  });

  $('#alphabet-slider').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value

    $('.alphabet span').css("--PRSS", value);

  });

  setInterval(function() {
    let randomfunk = randomNumber(0,100);
    let randomprss = randomNumber(0,100);
    
    $(".words").css({
      "--FUNK": randomfunk,
      "--PRSS": randomprss
    }); 
  }, 1000);

});

// Function to generate random number 
function randomNumber(min, max) { 
    return Math.floor(Math.random() * (max - min) + min);
}