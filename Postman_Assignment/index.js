
const { ApolloServer } = require("apollo-server");

const { Query } = require("./resolver/Query");
const { typeDefs } = require("./schema");

const server = new ApolloServer({
     typeDefs, 
     resolvers : {
         Query,
     }
    });
server.listen().then(({ url }) => {
  console.log("Server is ready at : " + url);
});