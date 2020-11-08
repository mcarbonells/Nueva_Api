import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const url = process.env.URI_ACADEMIC;

const resolvers = {
    Query: {
        listMaterias: async (_, { id_usuario }) => {
            return axios
                .get(`${url}/materias/${id_usuario}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createMateria: async (_, { id_usuario }) => {
            return axios
                .post(`${url}/materias/${id_usuario}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateSemestre: async (_, { input }) => {
            return axios
                .put(`${url}/materias`, inputSemestre)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
};

export default resolvers;
