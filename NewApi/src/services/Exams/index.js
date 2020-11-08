import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import typeDefs from "./typeDefs";
import resolvers from "./resolvers";

const server = new ApolloServer({
    schema: buildFederatedSchema([
        {
            typeDefs,
            resolvers,
        },
    ]),
});

server.listen({ port: 3000 }).then(({ url }) => {
    console.log(`🚀 Server ready at ${url}`);
});