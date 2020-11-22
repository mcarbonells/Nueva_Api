const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const url = `http://3.90.88.218:9090/getUser1a/`;

const resolvers = {
    Query: {
        getUser1a: async (_, { email }) => {
            return axios
                .get(`${url}/category/${email}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
};

module.exports =  resolvers;
