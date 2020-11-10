"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allTickets: [Ticket]!\n        ticketById(id: String!): Ticket!\n    }\n     type Ticket{\n        id: String!\n        userName: String!\n        section: String!\n        issue: String!\n        response: String!\n    }\n    input TicketInput {\n        id: String\n        userName: String!\n        section: String!\n        issue: String!\n        response: String!\n    }\n    extend type Mutation {\n        createTicket(ticket: TicketInput!): Ticket!\n        updateTicket(id: String!, ticket: TicketInput!): Ticket!\n        deleteTicket(id: String!): String\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var {
  gql
} = require('apollo-server');

var typeDefs = gql(_templateObject());
module.exports = typeDefs;
//# sourceMappingURL=typeDefs.js.map