exports.Tweet={
    tweetUser:({authorId}, args, {db}) => {
        return db.users.find((user) => user.id === authorId);
    },

    tweetStat:({statsId}, args, {db}) => {
        return db.stats.find((stat) => stat.id === statsId);
    },
};