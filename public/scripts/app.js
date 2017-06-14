
const tweetData =
[
  {
    "user": {
      "name": "Newton",
      "avatars": {
        "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
        "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
        "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
      },
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": {
        "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
        "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
        "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
      },
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Johann von Goethe",
      "avatars": {
        "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
        "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
        "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
      },
      "handle": "@johann49"
    },
    "content": {
      "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
    },
    "created_at": 1461113796368
  }
]

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

});
