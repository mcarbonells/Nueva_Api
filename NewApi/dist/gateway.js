"use strict";

var {
  ApolloGateway
} = require('@apollo/gateway');

var {
  ApolloServer
} = require('apollo-server-express');

var express = require('express');

var dotenv = require('dotenv');

var fs = require('fs');

var https = require('https');

dotenv.config();
var uri = process.env.URI;
var config = {
  ssl: true,
  port: 5000,
  hostname: "localhost"
};
var gateway = new ApolloGateway({
  serviceList: [{
    name: "Exams",
    url: "http://localhost:2001"
  }, {
    name: "Vocabulary",
    url: "http://localhost:2002"
  }, {
    name: "Levels",
    url: "http://localhost:2003"
  }, {
    name: "Login",
    url: "http://localhost:2004"
  }, {
    name: "Foro",
    url: "http://localhost:2005"
  }, {
    name: "Soporte",
    url: "http://localhost:2006"
  }, {
    name: "Perfiles",
    url: "http://localhost:2007"
  }],
  //Aqui se agregan los microcervicios con puertos diferentes 5001, 5002, 5003... y se crea su respectiva carpeta en services
  __exposeQueryPlanExperimental: true
});
var apollo = new ApolloServer({
  gateway,
  engine: false,
  playground: true,
  subscriptions: false
});
var app = express();
apollo.applyMiddleware({
  app
});
var server = https.createServer({
  key: fs.readFileSync("./localhost.key"),
  cert: fs.readFileSync("./localhost.crt")
}, app);
server.listen({
  port: config.port
}, () => console.log("🚀 Server ready at", "http".concat(config.ssl ? "s" : "", "://").concat(config.hostname, ":").concat(config.port).concat(apollo.graphqlPath)));
//# sourceMappingURL=gateway.js.map