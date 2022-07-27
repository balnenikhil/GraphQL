
exports.Query = {
    tweets: (parent, { limit, skip, sort_field, sort_order }, {db}) => {
      let limitTweets=db.tweets;
      if (skip !== null) {
          limitTweets = limitTweets.filter(
            (limitTweet, key) => !(key + 1 === skip)
          );
        }
    
        if (limit > 0) {
          limitTweets = limitTweets.filter((limitTweet, key) => key < limit);
        }
    
        if(sort_order)
        {
        if(sort_order.toLowerCase() === "asc")
        {
          limitTweets.sort((a, b) => a[sort_field].toLowerCase() > b[sort_field].toLowerCase() ? 1 : -1);
        }
        if(sort_order.toLowerCase() === "desc")
        {
          limitTweets.sort((a, b) => a[sort_field].toLowerCase() < b[sort_field].toLowerCase() ? 1 : -1);
        }
      }
        return limitTweets;
    },
  
    tweet: (parent, {id}, {db}) => {
      return db.tweets.find((tweet) => tweet.id === id);
    },
  
    users: (parent, args, {db}) => {
      return db.users;
    },
    
    user: (parent, { id }, {db}) => {
      return db.users.find((user) => user.id === id);
    },
  
    notifications: (parent, {limit}, {db}) => {
      let limitedNotes = db.notifications;
        if (limit > 0) {
          limitedNotes = limitedNotes.filter((limitedNote, key) => key < limit);
        }
        return limitedNotes;
    },
    notification: (parent, { id }, {db}) => {
      return db.notifications.find((notification) => notification.id === id);
    },
  
    stats: (parent, args, {db}) => {
      return db.stats;
    },
    stat: (parent, { id }, {db}) => {
      return db.stats.find((stat) => stat.id === id);
    },
    tweetsMeta: (parent, args, {db}) => {
      const size = db.tweets.length;
      const MetaEx = {
        count: size
      }
      return MetaEx;
    },
  
    notificationsMeta: (parent, args, {db}) => {
      const size = db.notifications.length;
      const MetaEx = {
        count: size
      }
      return MetaEx;
    },
};