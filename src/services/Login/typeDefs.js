const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        validateToken(headers: Headers): sessionData
    }

    type User {
        id: Int
        email: String
        provider: String
        name: String
        nickname: String
        image: String
    }

    input SessionInput {
    email: String
    password: String
    }

    input UserInput {
        email : String
        name: String
        nickname: String
        password : String
        password_confirmation: String
    }

    input Headers {
        token: String
        client: String
        uid: String
    }

    type sessionData {
        id: Int
        email: String
        name: String
        nickname: String
        image: String
        token: String
        type: String
        client: String
        uid: String
        error: String
    }

    extend type Mutation {
        logInUser_1(session: SessionInput): sessionData
        registerUser(user: UserInput): sessionData
        logInUser(session: SessionInput): sessionData 
    }
`;
module.exports = typeDefs;