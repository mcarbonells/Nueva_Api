const { ApolloServer }  = require ('apollo-server');
const { buildFederatedSchema }  = require ('@apollo/federation');
const  typeDefs   = require ('./typeDefs');
const  resolvers   = require ('./resolvers');

const server = new ApolloServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
});
//el puerto de este listen es el puerto interno del graphql por eso se usa el 2007 y no el 5002
server.listen({ port: 2007 }).then(({ url }) => { 
    console.log(`🚀 Server ready at ${url}`);
});