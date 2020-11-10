"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allPerfiles: [Perfil!]\n        profileById(id: Int!): Perfil!\n    }\n\n    type Perfil {\n        id: Int\n        nombre: String\n        segundoNombre: String\n        apellido: String\n        segundoApellido: String\n        email: String\n        constrasena: String\n        estado: Boolean\n        ubicacion: String\n        descripcion: String\n    }\n    input PerfilInput {\n        id: Int\n        nombre: String\n        segundoNombre: String\n        apellido: String\n        segundoApellido: String\n        email: String\n        constrasena: String\n        estado: Boolean\n        ubicacion: String\n        descripcion: String\n    }\n\n    extend type Mutation {\n        createProfile(perfil: PerfilInput!): String!\n        updateProfile(id: Int!, perfil: PerfilInput!): String!\n        updateProfilePassword(id: Int!, perfil: PerfilInput!): String!\n        deleteProfile(id: Int!, perfil: PerfilInput!): String!\n    }    \n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var {
  gql
} = require('apollo-server'); //el type defs se conserva solo se usa la notacion de apollo server


var typeDefs = gql(_templateObject());
module.exports = typeDefs;
//# sourceMappingURL=typeDefs.js.map