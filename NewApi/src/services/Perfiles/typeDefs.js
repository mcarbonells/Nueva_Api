const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        allPerfiles: [Perfil!]
        profileById(id: Int!): Perfil!
    }

    type Perfil {
        id: Int
        nombre: String
        segundoNombre: String
        apellido: String
        segundoApellido: String
        email: String
        constrasena: String
        estado: Boolean
        ubicacion: String
        descripcion: String
    }
    input PerfilInput {
        id: Int
        nombre: String
        segundoNombre: String
        apellido: String
        segundoApellido: String
        email: String
        constrasena: String
        estado: Boolean
        ubicacion: String
        descripcion: String
    }

    extend type Mutation {
        createProfile(perfil: PerfilInput!): String!
        updateProfile(id: Int!, perfil: PerfilInput!): String!
        updateProfilePassword(id: Int!, perfil: PerfilInput!): String!
        deleteProfile(id: Int!, perfil: PerfilInput!): String!
    }    
`;
module.exports =  typeDefs;
