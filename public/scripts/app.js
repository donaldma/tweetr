
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
  }
]

$(document).ready(function() {
  var $tweet = createTweetElement(tweetData[0]);

  // console.log($tweet)

  $('.tweetsContainer').append($tweet);
});

// console.log(tweetData[0].user.name  )


function createTweetElement(tweetObj) {
  return `<article class="tweet">${tweetObj.user.name}</article>`;
}


