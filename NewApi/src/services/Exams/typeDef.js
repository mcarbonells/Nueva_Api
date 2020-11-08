import { gql } from "apollo-server";

const typeDefs = gql`
    extend type Query {
        listMaterias(id_usuario:Int!): [Materia]
    }

    type Materia {
        id: Int!
        id_usuario: Int!
        id_semestre: Int!
        id_tipologia: Int!
        nombre: String
        prerequisitos: String
        creditos: Int
        nota: Float
    }

    type Semestre {
        id: Int!
        id_semestre: Int!
    }

    type respuesta {
        ok:String
        messages:String
    }

    extend type Mutation {
        createMateria(id_usuario: Int!): respuesta
        updateSemestre(input: SemestreInput): respuesta
    }
    
    input SemestreInput {
        id: Int!
        id_semestre: Int!
    }

    
`;

export default typeDefs;
