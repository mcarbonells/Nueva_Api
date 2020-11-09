import axios from "axios";
import dotenv from "dotenv";

dotenv.config();
const nodoPerfiles = 'localhost'
const puertoPerfiles = '5002'
const allProfiles = 'profiles'
const postProfile = 'profiles'
const editProfile = 'edit/profile'
const editPassword = 'edit/password'
const activeProfile = 'active/profile'
const URLAllPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${allProfiles}`;
const URLPostPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${postProfile}`;
const URLEditarPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${editProfile}`;
const URLEditarPassword = `http://${nodoPerfiles}:${puertoPerfiles}/${editPassword}`;
const URLActivarPerfile = `http://${nodoPerfiles}:${puertoPerfiles}/${activeProfile}`;

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
