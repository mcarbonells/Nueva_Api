const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        
    }
    type Category {
     name: String
     level: String
    }
    input CategoryInput {
         name: String
         level: String
    }
    extend type Mutation {
         
    }
`;
module.exports = typeDefs;