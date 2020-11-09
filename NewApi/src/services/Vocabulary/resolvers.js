const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const urlC = `http://localhost:3001/category`;
const urlW = `http://localhost:3001/words`;

const resolvers = {
    Query: {
        allCategories: async (_) => {
            return axios
                .get(`${urlC}/AllCategories`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        categoryByName: async (_, { body }) => {
            return axios
                .get(`${urlC}/category`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        categoryByLevel: async (_, { body }) => {
            return axios
                .get(`${urlC}/levelCategory`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allWords: async (_) => {
            return axios
                .get(`${urlW}/AllWords`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        wordsByCategory: async (_, { body }) => {
            return axios
                .get(`${urlW}/categoryWord`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        wordsByName: async (_, { body }) => {
            return axios
                .get(`${urlW}/word`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createCategory: async (_, { body }) => {
            return axios
                .post(`${urlC}/newCategory/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateCategory: async (_, { body }) => {
            return axios
                .put(`${urlC}/updateCategory`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteCategory: async (_, { body }) => {
            return axios
                .put(`${urlC}/deleteCategory`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createWord: async (_, { body }) => {
            return axios
                .post(`${urlW}/newWord`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateWord: async (_, { body }) => {
            return axios
                .post(`${urlW}/updateWord/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteWord: async (_, { body }) => {
            return axios
                .post(`${urlW}/deleteWord/`, body)
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
