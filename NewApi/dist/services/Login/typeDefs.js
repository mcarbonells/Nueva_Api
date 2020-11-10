"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        validateToken(headers: Headers): sessionData\n    }\n\n    type User {\n        id: Int\n        email: String\n        provider: String\n        name: String\n        nickname: String\n        image: String\n    }\n\n    input SessionInput {\n    email: String\n    password: String\n    }\n\n    input UserInput {\n        email : String\n        name: String\n        nickname: String\n        password : String\n        password_confirmation: String\n    }\n\n    input Headers {\n        token: String\n        client: String\n        uid: String\n    }\n\n    type sessionData {\n        id: Int\n        email: String\n        name: String\n        nickname: String\n        image: String\n        token: String\n        type: String\n        client: String\n        uid: String\n        error: String\n    }\n\n    extend type Mutation {\n        logInUser_1(session: SessionInput): sessionData\n        registerUser(user: UserInput): sessionData\n        logInUser(session: SessionInput): sessionData \n    }\n"]);

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