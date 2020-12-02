const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();

const url = `http://54.224.230.242:3000/examLevel`;
const urlW = `http://54.224.230.242:3000/weekQuiz`;
const urlQ = `http://54.224.230.242:3000/userQuiz`;

const resolvers = {
    Query: {
        allExamLevels: async (_) => {
            return axios
                .get(`${url}/AllExams`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        examById: async (_, { userId }) => {
            return axios
                .get(`${url}/userExamLevel/${userId}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allWeekQuiz: async (_) => {
            return axios
                .get(`${urlW}/Quizes`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        weekQuizById: async (_) => {
            return axios
                .get(`${urlW}/thisWeekQuiz`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        allUserQuiz: async (_) => {
            return axios
                .get(`${urlQ}/userQuizes`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        userQuizByIdQuiz: async (_, { idQuiz }) => {
            return axios
                .get(`${urlQ}/usersQuizes/${idQuiz}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        userQuizByUserId: async (_, { userId }) => {
            return axios
                .get(`${urlQ}/quizOfUser/${userId}`)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
    },
    Mutation: {
        createExam: async (_, { body }) => {
            return axios
                .post(`${url}/newExamLevel/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateExam: async (_, { body }) => {
            return axios
                .put(`${url}/completeExamLevel`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteExam: async (_, { body }) => {
            return axios
                .delete(`${url}/deleteExamLevel`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createWeekQuiz: async (_, { body }) => {
            return axios
                .post(`${urlW}/newQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        updateWeekQuiz: async (_, { body }) => {
            return axios
                .put(`${urlW}/deactivateQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteWeekQuiz: async (_, { body }) => {
            return axios
                .delete(`${urlW}/deleteQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        createUserQuiz: async (_, { body }) => {
            return axios
                .post(`${urlQ}/newQuiz/`, body)
                .then((res) => {
                    return res.data;
                })
                .catch(() => {
                    console.log("F");
                });
        },
        deleteUserQuiz: async (_, { body }) => {
            return axios
                .delete(`${urlQ}/deleteUserQuiz/`, body)
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
