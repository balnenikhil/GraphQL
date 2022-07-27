
const tweets=[
    { 
        id:"tweet"+1,
        body:"#JaspritBumrah #ENGvIND #INDvsENG@Jaspritbumrah93 becomes first Indian pacer to scalp 6 wickets in England in ODI Read: http://toi.in/bzG4aZ41/a24gk",
        date:"2022-07-11",
        read: true,
        authorId:"user"+1,
        statsId:"stat"+1,
    },
    { 
        id:"tweet"+2,
        body:"The #electric #fireplace is a kind of #transformation of the fire. The principle of the electric fireplace is to quote the European classical fireplace production #technology and modern acoustooptics, so that the design of the traditional fireplace has been greatly changed",
        date:"2022-07-09",
        read: false,
        authorId:"user"+2,
        statsId:"stat"+2,
    },
    { 
        id:"tweet"+3,
        body:"When sensors, IoT and holograms merge to make holographic avatars dance... A stunning show!Learn more about these new technologies and many more by joining FuturePass, our new Web3 Community: http://futurepass.xyz",
        date:"2021-12-31",
        read: false ,
        authorId:"user"+3,
        statsId:"stat"+3,

    }
];

const users=[
    {
        id:"user"+1,
        username:"nikhil",
        first_name:"Nikhil",
        last_name:"Chandra",
        full_name:"Nikhil Chandra",
        name:"nikhil",
        avatar_url:"https://www.avatarurl.com/shravan"
    },
    {
        id: "user"+2,
        username: "dinesh",
        first_name: "Dinesh",
        last_name: "Karthik",
        full_name: "Dinesh Karthik",
        name: "dineshkarthik",
        avatar_url: "https://www.avatarurl.com/dinesh"
    },
    {
        id: "user"+3,
        username: "surya",
        first_name: "Surya",
        last_name: "Kumar",
        full_name: "Surya Kumar",
        name: "suryakumar",
        avatar_url: "https://www.avatarurl.com/surya"
    }
]

const notifications=[
    {
        id:"notification"+1,
        body:"amit liked your tweet"
    },
    {
        id:"notification"+2,
        body:"parag retweeted"
    },
    {
        id:"notification"+3,
        body:"follow topic: Technology"
    }
]

const stats=[
    {
        id:"stat"+1,
        views: 193,
        likes: 174,
        retweets: 100,
        responses: 43
    },
    {
        id:"stat"+2,
        views: 12,
        likes: 10,
        retweets: 50,
        responses: 40
    },
    {
        id:"stat"+3,
        views: 1250,
        likes: 1050,
        retweets: 550,
        responses: 450
    }
]

exports.db={
    tweets,
    users,
    notifications,
    stats,
}