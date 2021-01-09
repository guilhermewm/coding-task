const { data } = require("./data");
const { Category } = require("./Category");
const { resolvers } = require("./resolvers");
const { typeDef } = require("./typeDef");

module.exports = {
  data,
  Category,
  resolvers,
  typeDef,
};