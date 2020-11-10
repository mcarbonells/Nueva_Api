"use strict";

var {
  ApolloServer
} = require('apollo-server');

var {
  buildFederatedSchema
} = require('@apollo/federation');

var typeDefs = require('./typeDefs');

var resolvers = require('./resolvers');

var server = new ApolloServer({
  schema: buildFederatedSchema([{
    typeDefs,
    resolvers
  }])
}); //el puerto de este listen es el puerto interno del graphql por eso se usa el 2007 y no el 5002

server.listen({
  port: 2007
}).then((_ref) => {
  var {
    url
  } = _ref;
  console.log("\uD83D\uDE80 Server ready at ".concat(url));
});
//# sourceMappingURL=index.js.map