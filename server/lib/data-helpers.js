"use strict";

// Defines helper functions for saving and getting tweets, using the database `db`
module.exports = function makeDataHelpers(db) {
  return {

    // Saves a tweet to `mongodb`
    saveTweet: function(newTweet, callback) {
      db.collection("tweets").insert(newTweet, (callback));
    },
    // Get all tweets in `mongodb`
    getTweets: function(callback) {
      db.collection("tweets").find().toArray(callback);
    }
  };
};
