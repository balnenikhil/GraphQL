
exports.Mutation = {
    createTweet: (parent, { body }, { db }) => {
      const tweetId = db.tweets.length + 1;
      const tweeting = db.tweets[0];
      const newTweet = {
        ...tweeting,
        id: "tweet" + tweetId,
        body: body,
      };
  
      db.tweets.push(newTweet);
  
      return newTweet;
    },
  
    deleteTweet: (parent, { id }, { db }) => {
      db.tweets = db.tweets.filter((tweet) => tweet.id !== id);
      return true;
    },
  
    markTweetRead: (parent, { id }, { db }) => {
      const index = db.tweets.findIndex((tweet) => {
        return tweet.id === id;
      });
      const val = !db.tweets[index].read;
      db.tweets[index] = {
        ...db.tweets[index],
        read: val,
      };
      if (index !== -1) return true;
      return false;
    },
  };