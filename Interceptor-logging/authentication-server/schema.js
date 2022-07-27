
const {gql}=require("apollo-server");
exports.typeDefs = gql`

  type Query {
       login(email: String!, password: String!): AuthData
  }

  type User {
  id: ID!
  email: String!
  password: String
}

type AuthData {
  userId: ID!
  token: String!
  tokenExpiration: Int!
}
`;