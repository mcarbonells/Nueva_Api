const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        getUser1a(email: String): [Ss_1a]
    }
    type Ss_1a {
         name: String
         email: String
    }
`;
module.exports = typeDefs;