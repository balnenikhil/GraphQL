const { ApolloServer } = require("apollo-server");

const { typeDefs }=require("./schema");

const {Query}=require("./resolvers/Query");
const { db } = require("./db");


const server = new ApolloServer({
  typeDefs,
  resolvers:{
    Query
  },
  context: {
   db
  },
});

server.listen().then(({ url }) => {
  console.log("Server is ready at url : " + url);
});