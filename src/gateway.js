const { ApolloGateway } = require('@apollo/gateway');
const { ApolloServer } = require('apollo-server-express');
const express = require('express') ;
const dotenv = require('dotenv');
const fs = require('fs');
const https = require('https');

dotenv.config();

const uri = process.env.URI;

const config = { ssl: true, port: 5000, hostname: uri };

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
