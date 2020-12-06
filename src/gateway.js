const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server-express');
const express = require('express') ;
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');
const http = require('http');

dotenv.config();

const uri = process.env.URI;

const config = { ssl: false, port: 5000, hostname: "localhost" };

const gateway = new ApolloGateway({
    serviceList: [
        { name: "Exams", url: `http://localhost:2001` },
        { name: "Vocabulary", url: `http://localhost:2002` },
        { name: "Levels", url: `http://localhost:2003` },
        { name: "Login", url: `http://localhost:2004` },
        { name: "Foro", url: `http://localhost:2005` },
        { name: "Soporte", url: `http://localhost:2006` },
        { name: "Perfiles", url: `http://localhost:2007` },
        { name: "Ss_1a", url: `http://localhost:2008` },
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

let server = (http.createServer(
    /*{
        key: fs.readFileSync(`./localhost.key`),
        cert: fs.readFileSync(`./localhost.crt`),
    },*/
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
