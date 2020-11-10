const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const urlT = `http://ec2-3-237-29-238.compute-1.amazonaws.com:8080/api/Ticket`;

const resolvers = {
    Query: {
        allTickets: async (_) => {
            return axios
                .get(`${urlT}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        ticketById: async (_, { id }) => {
            return axios
                .get(`${urlT}/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createTicket: async (_, { ticket }) => {
            return axios
                .post(`${urlT}`, ticket)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateTicket: async (_, { id, ticket }) => {
            return axios
                .put(`${urlT}/${id}`, ticket)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteTicket: async (_, { id }) => {
            return axios
                .delete(`${urlT}/${id}`)
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