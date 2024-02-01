"use strict";

const { GraphQLSchema } = require("graphql");
const mutation = require("./mutations");
const query = require("./queries");
const typeDefs = require("./types");

module.exports = new GraphQLSchema({
  query,
  mutation,
  types: Object.values(typeDefs),
});
