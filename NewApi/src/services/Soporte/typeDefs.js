const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        allTickets: [Ticket]!
        ticketById(id: String!): Ticket!
    }
     type Ticket{
        id: String!
        userName: String!
        section: String!
        issue: String!
        response: String!
    }
    input TicketInput {
        id: String
        userName: String!
        section: String!
        issue: String!
        response: String!
    }
    extend type Mutation {
        createTicket(ticket: TicketInput!): Ticket!
        updateTicket(id: String!, ticket: TicketInput!): Ticket!
        deleteTicket(id: String!): String
    }
`;
module.exports = typeDefs;