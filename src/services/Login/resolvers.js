const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();
const  urlLogsign = `52.72.81.222`;
const URLLogsign = `http://${urlLogsign}:${5001}`;

const resolvers = {
    Query: {
        validateToken: async (_, { headers }) => {
            return axios
				.get(`${URLLogsign}/auth/validate_token`, {params:{
					'client': headers.client,
					'uid': headers.uid,
					'access-token': headers.token
				}}, true).then((response) => {
					let user = response.data.data
					user['token'] = response.headers['access-token']
					user['type'] = response.headers['token-type']
					user['client'] = response.headers.client
					delete user['provider']
					delete user['uid']
					delete user['allow_password_change']
					return user
				}).catch ((error) => {
                    let user ={
                        id: -1,
                        email: "",
                        name: "",
                        nickname: "",
                        image: "",
                        token: "",
                        type: "",
                        client:"",
                        uid: "",
                        error : "Invalid Token"
                    }
                    return user;
                })
        },  
        getUserByEmail: async (_, { email })=>{
            return axios
                .get(`${URLLogsign}/users/email?email=${email}`)
                .then((res) => {
                    console.log(res);
                    let user = res.data;
                    return user;
                })
                .catch(() => {
                    console.log("No entre");
                });
        }     
    },
    Mutation: {
        logInUser_1: (_, { session }) => {
            return axios
				.post(`${URLLogsign}/auth/sign_in`, session).then(
					(response) => {
					    console.log(response);
						let user = response.data.data
						user['token'] = response.headers['access-token']
						user['uid'] = response.headers.uid
						user['type'] = response.headers['token-type']
						user['client'] = response.headers.client
						return  user;
					}
				).catch ((error) => {
                    console.log(error.response.data.errors);
                    let user ={
                        id: -1,
                        email: "",
                        name: "",
                        nickname: "",
                        image: "",
                        token: "",
                        type: "",
                        client:"",
                        uid: "",
                        error : error.response.data.errors[0]
                    }
                    return user;
                })
		},
        registerUser: (_, { user }) => {
            return axios
				.post(`${URLLogsign}/auth/`, user).then(
					(res) => {
						//console.log("Server response => ", res);
						let user = res.data.data;
						user['token'] = res.headers['access-token']
						user['uid'] = res.headers.uid
						user['type'] = res.headers['token-type']
						user['client'] = res.headers.client
						return user;
					}
				)
		},
        logInUser:async (_, { session }) => {
            return axios
                .post(`${URLLogsign}/ldap`, session)
                .then(
                    (response) => {
                        console.log(response.data);
                        if (response.data.answer == "false"){
                            console.log("el if del false");
                            let user ={
                                id: -1,
                                email: "",
                                name: "",
                                nickname: "",
                                image: "",
                                token: "",
                                type: "",
                                client:"",
                                uid: "",
                                error : "error en validacion de credenciales"
                            }
                            return user
                        }else{
                            console.log("validacion eldab");
                            return 1
                        }
                    }
                ).then((result)=>{
                //console.log("validacion then");
                console.log(result);
                if (result != 1){
                    //resolve(result)
                    return result
                }else{ console.log("sending else");
                console.log("Session: ");
                console.log(session);
                return axios
                    .post(`${URLLogsign}/auth/sign_in`, session).then(
                                (response) => {
                                    console.log(response.data);
                                    let user = response.data.data
                                    user['token'] = response.headers['access-token']
                                    user['uid'] = response.headers.uid
                                    user['type'] = response.headers['token-type']
                                    user['client'] = response.headers.client
                                    return  user;
                                }
                            ).catch ((error) => {
                                let user ={
                                    id: -1,
                                    email: "",
                                    name: "",
                                    nickname: "",
                                    image: "",
                                    token: "",
                                    type: "",
                                    client:"",
                                    uid: "",
                                    error : "error en validacion de credenciales"
                                }
                                return user;
                            })
                }

            })
        },

    },
};

module.exports =  resolvers;
