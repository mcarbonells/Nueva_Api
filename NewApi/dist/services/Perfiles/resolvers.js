const axios = require('axios');

const dotenv = require('dotenv');

dotenv.config();
const nodoPerfiles = 'localhost';
const puertoPerfiles = '5002';
const allProfiles = 'profiles';
/*const postProfile = 'profiles'
const editProfile = 'edit/profile'
const editPassword = 'edit/password'
const activeProfile = 'active/profile'*/

const URLAllPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${allProfiles}`;
/*const URLPostPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${postProfile}`;
const URLEditarPerfiles = `http://${nodoPerfiles}:${puertoPerfiles}/${editProfile}`;
const URLEditarPassword = `http://${nodoPerfiles}:${puertoPerfiles}/${editPassword}`;
const URLActivarPerfile = `http://${nodoPerfiles}:${puertoPerfiles}/${activeProfile}`;*/

const resolvers = {
  Query: {
    allPerfiles: async _ => {
      return axios.get(`${URLAllPerfiles}/profiles`).then(res => {
        return res.data;
      }).catch(() => {
        console.log("No hay todos los perfiles");
      });
    },
    profileById: async (_, {
      id
    }) => {
      return axios.get(`${URLAllPerfiles}/profiles/${id}`).then(res => {
        return res.data;
      }).catch(() => {
        console.log("No hay perfil con ese id");
      });
    }
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map