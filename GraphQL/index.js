const { ApolloServer, gql } = require("apollo-server")

const typeDefs = gql`
    type Query {
        hello: String
        products: [Product!]!
    }

    type Product {
        name: String!
        description: String!
        quantity: Int!
        price: Float!
    }
`
const resolvers = {
    Query:{
        hello: () => {
            return "World!";
        },
        products: () => {
            return [{
                name: "watch",
                description: "smart watch",
                quantity: 20,
                price: 289.9,
            }]
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
});

server.listen().then(({url}) => {
    console.log("Server is ready at "+url);
})