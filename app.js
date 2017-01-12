$(document).ready(function() {
  var $boxes = $('.box');
  var $colors = 'white green red blue yellow'
  var $color = 'white';


  $boxes.click(function(event) {
    $(this).addClass($color);
  });

  $boxes.dblclick(function(event) {
    $(this).removeClass($colors);
  });

  $('#reset').click(function(event) {
    $boxes.removeClass($colors);
  });

  $('#red').click(function(event) {
    $color = 'red';
  });

  $('#blue').click(function(event) {
    $color = 'blue';
  });

  $('#green').click(function(event) {
    $color = 'green';
  });

  $('#yellow').click(function(event) {
    $color = 'yellow';
  });

  $('#white').click(function(event) {
    $color = 'white';
  });

});
