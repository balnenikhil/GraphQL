const { ApolloServer, gql } = require("apollo-server");
const {typeDefs} = require("./schema");
const {Query}= require("./resolvers/Query");
const { dateScalar } = require("./resolvers/Date");
const {Tweet} =require("./resolvers/Tweet");
const {Mutation} = require("./resolvers/Mutation");
const {db}=require("./db");

const server = new ApolloServer({
    typeDefs,
    resolvers:{
        Query,
        Tweet,
        Mutation,
        Date: dateScalar
    },
    context:{
        db,
    },
});

server.listen().then(({url})=>{
    console.log("Server is ready at: "+url);
})