var tweetData = [];

$(document).ready(function() {
  function escape(str) {
    var div = document.createElement('div');
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  }

//function that takes data from db and creates a tweet

  function createTweetElement(tweet) {
    var tweetHandle = tweet.user.handle;
    var tweetAvatar = tweet.user.avatars.regular;
    var tweetName = tweet.user.name;
    var tweetContent = escape(tweet.content.text);
    var tweetDate = moment(tweet.created_at).fromNow();
    var tweetID = tweet._id;
    return `
    <article class="tweet" id="${tweetID}">
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
        <div id="twitterIcons">
          <span data-id="${tweetID}" class="heartClick"><i class="fa fa-heart" aria-hclassden="true"></i></span>
          <span class="retweetClick"><i class="fa fa-retweet" aria-hidden="true"></i></span>
          <span class="flagClick"><i class="fa fa-flag" aria-hidden="true"></i></span>
        </div>
          <span class="likeCounter">0</span>
      </footer>
    </article>`;
  }

//loops through data base and prepends the tweet when it is posted

  function renderTweets(tweets) {
    $('.tweetsContainer').empty();
    for(var i = 0; i < tweets.length; i++) {
      var $tweet = createTweetElement(tweets[i]);
      $('.tweetsContainer').prepend($tweet);
    }

//Calling the like counter function from click-icons.js

    addEventListeners();
  }

//async javascript that posts tweet to server and gets tweets from server db and calls the rendertweets function

  function loadTweets() {
    $.ajax({
      url: '/tweets/',
      method: 'GET'
    }).done(renderTweets);
  }

  $(".tweetForm").on("submit", function(event) {
    event.preventDefault();
    if($(".textboxArea").val().length > 140) {
      alert('Character count limit exceeded');
      return;
    }
    if($(".textboxArea").val().length === 0) {
      alert('Input field is empty');
      return;
    }
    $.ajax({
      method: "POST",
      url: "/tweets/",
      data: $(this).serialize()
    }).done(function() {
      loadTweets();
      $(".textboxArea").val("");
      $(".counter").text(140);
    });
  });

  loadTweets();

//Jquery for compose button toggle

  $(".new-tweet").hide();
  $(".composeButton").click(function() {
    $('.new-tweet').slideToggle("fast");
    $(".textboxArea").focus();
  });

});
