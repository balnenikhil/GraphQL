const { GraphQLScalarType, Kind } = require("graphql");

exports.urlScalar = GraphQLScalarType({
  name: "Url",
  description: "Url Scalar",
  serializer(value) {},
  parseValue(value) {},
  parseLiteral(value) {},
});