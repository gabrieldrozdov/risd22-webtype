$(document).ready(function() {
  console.log('hello world');
 
  $('#darkmode').click(function(){
    console.log('button clicked');

    $('body').toggleClass('darkmode');
    $('.bodycontent').toggleClass('contentdarkmode');
  });

});


