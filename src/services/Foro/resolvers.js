const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const urlT = `http://foro.foro.172.31.66.80.xip.io/api/v1/threads`;
const urlE = `http://foro.foro.172.31.66.80.xip.io/api/v1/entrys`;

const resolvers = {
    Query: {
        allThreads: async (_) => {
            return axios
                .get(`${urlT}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        threadById: async (_, { id }) => {
            return axios
                .get(`${urlT}/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        threadByLevel: async (_, { id, active }) => {
            return axios
                .get(`${urlT}/level/${id}/${active}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allEntrys: async (_) => {
            return axios
                .get(`${urlE}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        entryById: async (_, { id }) => {
            return axios
                .get(`${urlE}/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        entryThread: async (_, { id, active }) => {
            return axios
                .get(`${urlE}/thread/${id}/${active}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createThread: async (_, { thread }) => {
            return axios
                .post(`${urlT}`, thread)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateThread: async (_, { id, thread }) => {
            return axios
                .put(`${urlT}/${id}`, thread)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteThread: async (_, { id }) => {
            return axios
                .delete(`${urlT}/${id}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createEntry: async (_, { entry }) => {
            return axios
                .post(`${urlE}`, entry)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateEntry: async (_, { id, entry }) => {
            return axios
                .put(`${urlE}/${id}`, entry)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteEntry: async (_, { id }) => {
            return axios
                .delete(`${urlE}/${id}`)
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