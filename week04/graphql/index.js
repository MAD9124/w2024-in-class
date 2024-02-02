"use strict";

const { ApolloServer } = require("apollo-server");
const schema = require("./schema.js");

const server = new ApolloServer({
  schema,
});

const PORT = process.env.PORT || 4000;
server
  .listen(PORT)
  .then(({ url }) => {
    console.log(`Server listening at ${url}`);
  })
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });