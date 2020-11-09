const { ApolloServer } = require('apollo-server');
const { buildFederatedSchema } = require('@apollo/federation');
import typeDefs from './typeDefs';
import resolvers from './resolvers';

const server = new ApolloServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
});
console.log("papas");
server.listen({ port: 3000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});