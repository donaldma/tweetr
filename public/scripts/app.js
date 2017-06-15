
const tweetData = []

$(document).ready(function() {
  function escape(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
  }

  function createTweetElement(tweet) {
    var tweetHandle = tweet.user.handle;
    var tweetAvatar = tweet.user.avatars.regular;
    var tweetName = tweet.user.name;
    var tweetContent = escape(tweet.content.text);
    var tweetDate = moment(tweet.created_at).fromNow();
    return `
    <article class="tweet">
      <header>
        <span class="tweetsHandle">${tweetHandle}</span>
        <img class="profileAvatar" src=${tweetAvatar}>
        <h2 class="tweetsName">${tweetName}</h2>
      </header>
      <p class="tweetBody">
        ${tweetContent}
      </p>
      <footer>
        <span class="date">${tweetDate}</span>
        <i class="fa fa-flag" aria-hidden="true"></i>
        <i class="fa fa-retweet" aria-hidden="true"></i>
        <i class="fa fa-heart" aria-hidden="true"></i>
      </footer>
    </article>`;
  };

  function renderTweets(tweets) {
    $('.tweetsContainer').empty();
    for(var i = 0; i < tweets.length; i++) {
      var $tweet = createTweetElement(tweets[i]);
      $('.tweetsContainer').prepend($tweet);
    }
  }

  function loadTweets() {
    $.ajax({
      url: '/tweets/',
      method: 'GET'
    }).done(renderTweets)
  }

  $(".tweetForm").on("submit", function(event) {
    event.preventDefault();
    if($(".textboxArea").val().length > 140 || $(".textboxArea").val().length === 0) {
      alert('fuck off');
    } else {
      $.ajax({
        method: "POST",
        url: "/tweets",
        data: $(this).serialize()
      }).done(function() {
        loadTweets();
      })
    }
  })

  loadTweets();

  $(".new-tweet").hide();
  $(".composeButton").click(function() {
    $('.new-tweet').slideToggle();
    $(".textboxArea").focus();
  })

});
