"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allThreads: [Thread]!\n        threadLevel(id: String!, active: String!): [Thread]!\n        threadById(id: String!): Thread!\n        allEntrys: [Entry]!\n        entryThread(id: String!, active: String!): [Entry]!\n        entryById(id: String!): Entry!\n    }\n    type Thread{\n        _id: String!\n        title: String!\n        description: String!\n        levelId: String!\n        userName: String!\n        userId: String!\n        active: Boolean!\n    }\n    input ThreadInput {\n        _id: String\n        title: String!\n        description: String\n        levelId: String\n        userName: String\n        userId: String\n        active: Boolean\n    }\n    type Entry{\n        _id: String!\n        message: String!\n        threadId: String!\n        userName: String!\n        userId: String!\n        active: Boolean!\n        isAuthor: Boolean!\n    }\n    input EntryInput {\n        _id: String\n        message: String!\n        threadId: String!\n        userName: String!\n        userId: String!\n        active: Boolean\n        isAuthor: Boolean\n    }\n    extend type Mutation {\n        createThread(thread: ThreadInput!): Thread!\n        updateThread(id: String!, thread: ThreadInput!): Thread!\n        deleteThread(id: String!): String\n        createEntry(entry: EntryInput!): Entry!\n        updateEntry(id: String!, entry: EntryInput!): Entry!\n        deleteEntry(id: String!): String\n    }\n"]);

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