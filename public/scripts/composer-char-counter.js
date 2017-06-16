//JS file for character counter

$(document).ready(function(){
  $(".new-tweet form").keyup(function() {
    var remaining = 140 - $(".textboxArea").val().length;
    if(remaining < 0) {
      $(".counter").css('color', 'red')
    } else {
      $(".counter").css('color', 'black')
    }
    $(".counter").text(remaining);
  });
});