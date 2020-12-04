const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

//const url = process.env.URI_UN;
const urlclass = `http://54.163.16.166:9000/classification`;
const urlprog = `http://54.163.16.166:9000/progress`;

const resolvers = {
	Query: {
		allClassification: async (_) =>{
            return axios
            .get(`${urlclass}/allClassification`)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
        classificationById: async (_, { id }) =>{
            return axios 
            .get(`${urlclass}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
        allProgress: async (_) =>{
            return axios 
            .get(`${urlprog}/allProgress`)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },    
		progressById: async (_, { id }) =>{
            return axios
            .get(`${urlprog}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
    },

	Mutation: {
		createClassification: async (_, { classification }) =>{
            return axios
            .post(`${urlclass}/`, classification)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
		updateClassification: async(_, { id, classification }) =>{
            return axios
            .put(`${urlclass}/${id}`, classification)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
		deleteClassification: async(_, { id }) =>{
            return axios
            .delete(`${urlclass}/${id}`)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
        createProgress: async (_, { progress }) =>{
            return axios
            .post(`${urlprog}/`, progress)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
		updateProgress: async (_, { id, progress }) =>{
            return axios
            .put(`${urlprog}/${id}`, progress)
            .then((res) => {
                return res.data;
            })
            .catch(() => {
                console.log("F");
            });
        },
		deleteProgress: async (_, { id }) =>{
            return axios
            .delete(`${urlprog}/${id}`)
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
