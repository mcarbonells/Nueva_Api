const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const nodoPerfiles = '54.163.16.166'  //debe cambiarse el puerto por aws perfiles
const puertoPerfiles = '5002'      // se mantiene l puerto del microservicio 
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
        allPerfiles: async (_) => {
            return axios
                .get(`${URLAllPerfiles}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("No hay todos los perfiles");
                });
        },
        profileById: async (_, { id }) => {
            return axios
                .get(`${URLAllPerfiles}/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("No hay perfil con ese id");
                });
        },
        
    },
    Mutation:{
        updateProfile: async (_, { id,perfil }) => {
            return axios
                .put(`${URLEditarPerfiles}/${id}`, perfil)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("El perfil no fue editado");
                });
        },
        updateProfilePassword: async (_, { id,perfil }) => {
            return axios
                .put(`${URLEditarPassword}/${id}`, perfil)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("La contraseña del perfil no fue actualizada");
                });
        },
        createProfile: async (_, { perfil }) => {
            return axios
                .post(`${URLPostPerfiles}`, perfil)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("El perfil no fue creado");
                });
        },
        deleteProfile: async (_, { id,perfil }) => {
            return axios
                .put(`${URLActivarPerfile}/${id}`, perfil)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("El perfil sigue activo");
                });
        },
    },
    
};

module.exports =  resolvers;
