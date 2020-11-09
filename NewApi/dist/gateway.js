import { ApolloServer } from "apollo-server-express";
import { ApolloGateway } from "@apollo/gateway";
import express from "express";
import dotenv from "dotenv";
import fs from "fs";
import https from "https";
dotenv.config();
const uri = process.env.URI;
const config = {
  ssl: true,
  port: 5000,
  hostname: "localhost"
};
const gateway = new ApolloGateway({
  serviceList: [{
    name: "exams",
    url: `http://${uri}:3000`
  }, {
    name: "vocabulary",
    url: `http://${uri}:4000`
  }],
  //Aqui se agregan los microcervicios con puertos diferentes 5001, 5002, 5003... y se crea su respectiva carpeta en services
  __exposeQueryPlanExperimental: true
});
const apollo = new ApolloServer({
  gateway,
  engine: false,
  playground: true,
  subscriptions: false
});
const app = express();
apollo.applyMiddleware({
  app
});
let server = server = https.createServer({
  key: fs.readFileSync(`./localhost.key`),
  cert: fs.readFileSync(`./localhost.crt`)
}, app);
server.listen({
  port: config.port
}, () => console.log("🚀 Server ready at", `http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${apollo.graphqlPath}`));
//# sourceMappingURL=gateway.js.map