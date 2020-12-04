const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server-express');
const express = require('express') ;
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');

dotenv.config();

const uri = process.env.URI;

const config = { ssl: true, port: 5000, hostname: "localhost" };

const gateway = new ApolloGateway({
    serviceList: [
        { name: "Exams", url: `http://${uri}:2001` },
        { name: "Vocabulary", url: `http://${uri}:2002` },
        { name: "Levels", url: `http://${uri}:2003` },
        { name: "Login", url: `http://${uri}:2004` },
        { name: "Foro", url: `http://${uri}:2005` },
        { name: "Soporte", url: `http://${uri}:2006` },
        { name: "Perfiles", url: `http://${uri}:2007` },
        { name: "Ss_1a", url: `http://${uri}:2008` },
    ], 
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
