const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        allThreads: [Thread]!
        threadLevel(id: String!, active: String!): [Thread]!
        threadById(id: String!): Thread!
        allEntrys: [Entry]!
        entryThread(id: String!, active: String!): [Entry]!
        entryById(id: String!): Entry!
    }
    type Thread{
        _id: String!
        title: String!
        description: String!
        levelId: String!
        userName: String!
        userId: String!
        active: Boolean!
    }
    input ThreadInput {
        _id: String
        title: String!
        description: String
        levelId: String
        userName: String
        userId: String
        active: Boolean
    }
    type Entry{
        _id: String!
        message: String!
        threadId: String!
        userName: String!
        userId: String!
        active: Boolean!
        isAuthor: Boolean!
    }
    input EntryInput {
        _id: String
        message: String!
        threadId: String!
        userName: String!
        userId: String!
        active: Boolean
        isAuthor: Boolean
    }
    extend type Mutation {
        createThread(thread: ThreadInput!): Thread!
        updateThread(id: String!, thread: ThreadInput!): Thread!
        deleteThread(id: String!): String
        createEntry(entry: EntryInput!): Entry!
        updateEntry(id: String!, entry: EntryInput!): Entry!
        deleteEntry(id: String!): String
    }
`;
module.exports = typeDefs;