const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const url = `https://3.90.88.218:9090/getUser1a`;

const resolvers = {
    Query: {
        getUser1a: async (_, { email }) => {
            return axios
                .get(`${url}/${email}`)
                .then((res) => {
                    console.log(res.data);
                    return res.data;
                })
                .catch((err) => {
                    console.log(err);
                    console.log("F");
                });
        },
    },
};

module.exports =  resolvers;
