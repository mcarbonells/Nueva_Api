const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        getUser1a(email: String): Ss_1a
    }
    type Ss_1a {
        displayName: String
        email: String
        photoURL: String
        role: String
        emailVerified: Boolean
    }
`;
module.exports = typeDefs;