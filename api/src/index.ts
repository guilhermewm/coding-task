const { ApolloServer, gql } = require("apollo-server");
const categories = require("./categories");

const typeDeff = gql`
  type Query
`;

const server = new ApolloServer({
  typeDefs: [typeDeff, categories.typeDef],
  resolvers: [categories.resolvers]
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
