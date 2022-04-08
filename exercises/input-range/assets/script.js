$(document).ready(function(){

  $('.axis-range').on('input', function(){

    let value = parseInt($(this).val()); //get slider input value

    const slidertype = $(this).data('type'); //get slider axis

    $('.bodycontent').css("--"+slidertype, value);

  });
});


