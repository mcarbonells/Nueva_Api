const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server-express');
const express = require('express');
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');

dotenv.config();

const uri = process.env.URI_UN;

const config = { ssl: true, port: 5000, hostname: "localhost" };

const gateway = new ApolloGateway({
    serviceList: [
        { name: "levels", url: `http://localhost:2003` }
    ], //Aqui se agregan los microcervicios con puertos diferentes 5001, 5002, 5003... y se crea su respectiva carpeta en services
    __exposeQueryPlanExperimental: true,
});

const apollo = new ApolloServer({
    gateway,
    engine: false,
    playground: true,
    subscriptions: false,
});

const app = express();
apollo.applyMiddleware({ app });

let server = (https.createServer(
    {
        key: fs.readFileSync(`./localhost.key`),
        cert: fs.readFileSync(`./localhost.crt`),
    },
    app
));

server.listen({ port: config.port }, () =>
    console.log(
        "🚀 Server ready at",
        `http${config.ssl ? "s" : ""}://${config.hostname}:${config.port}${
            apollo.graphqlPath
        }`
    )
);
