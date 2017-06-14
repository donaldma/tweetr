$(document).ready(function() {
  function createFAIcon(faID) {
    var faElement = $('<i>');
    faElement.addClass('fa ' + faID);
    faElement.attr('aria-hidden', 'true');
    return faElement;
  }

  $(".tweetsContainer").hover(function() {
      var iconContainer = $('<div>');
      iconContainer.addClass('icons');
      var flagIcon = createFAIcon('fa-flag');
      var retweetIcon = createFAIcon('fa-retweet');
      var heartIcon = createFAIcon('fa-heart');

      iconContainer.append(flagIcon).append(retweetIcon).append(heartIcon);
      $('footer').append(iconContainer);
    }, function() {
      $(this).find('footer').find("div:last").remove();
    });
});