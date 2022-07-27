
const { gql } = require("apollo-server");

exports.typeDefs = gql`
  type Query {
    coinsAvg(skip: Int, limit: Int, currency: String): [Coin!]!
    coinAvg(name: String!, currency: String!): Coin!
    coinChart(period: String!, coinId: String!): [[Float!]!]!
  }
  type Coin {
    id: ID
    icon: String
    name: String
    symbol: String
    rank: Int
    price: Float
    priceBtc: Float
    volume: Int
    availableSupply: Float
    totalSupply: Int
    priceChange1h: Float
    priceChange1d: Float
    priceChange1w: Float
    websiteUrl: String
    twitterUrl: String
    contractAddress: String
    decimals: Int
    exp: [String]
  }
`;