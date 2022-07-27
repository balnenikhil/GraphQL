const {typeDefs} = require("./schema");
const {Query}= require("./resolvers/Query");
const { dateScalar } = require("./resolvers/Date");
const {Tweet} =require("./resolvers/Tweet");
const {Mutation} = require("./resolvers/Mutation");
const {db}=require("./db");

const  resolvers={
  Query,
  Tweet,
  Mutation,
  Date: dateScalar
}

it('returns tweets', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  
    const result = await testServer.executeOperation({
      query: 'query Tweets { tweets { id body date read }'
    });
  
    expect(result.errors).toBeUndefined();
  });

  it('returns tweet', async () => {
    const testServer = new ApolloServer({
      typeDefs,
      resolvers,
    });
  
    const result = await testServer.executeOperation({
      query: 'query Tweet($tweetId: ID!) { tweet(id: $tweetId) { id body date } }',
      variables: { id: 'tweet1' },
    });
  
    expect(result.errors).toBeUndefined();
  });