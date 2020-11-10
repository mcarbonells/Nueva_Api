const axios = require('axios');
const dotenv = require ('dotenv') ;

dotenv.config();
const  urlLogsign = `34.207.165.50`;
const URLLogsign = `http://${urlLogsign}:${5001}`;

const resolvers = {
    Query: {
        validateToken: async (_, { headers }) => {
            return axios
				.get(`${URLLogsign}/auth/validate_token`, {
					'client': headers.client,
					'uid': headers.uid,
					'access-token': headers.token
				}, true).then((response) => {
					let user = response.body.data
					user['token'] = response.headers['access-token']
					user['type'] = response.headers['token-type']
					user['client'] = response.headers['client']
					delete user['provider']
					delete user['uid']
					delete user['allow_password_change']
					resolve(user)
				})
		},       
    },
    Mutation: {
        logInUser_1: (_, { session }) => {
            return axios
				.post(`${URLLogsign}/auth/sign_in`, session, true).then(
					(response) => {
						if(response.statusCode>300){
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
						  error : response.error.errors[0]
						}
						resolve(user)
						}else{
						//console.log("Server response => ", response);
						let user = response.body.data
						user['token'] = response.headers['access-token']
						user['uid'] = response.headers['uid']
						user['type'] = response.headers['token-type']
						user['client'] = response.headers['client']
						resolve(user);
						}
					}
				)
		},
        registerUser: (_, { user }) => {
            return axios
				.post(`${URLLogsign}/auth/`, user, true).then(
					(response) => {
						console.log("Server response => ", response);
						let user = response.body.data
						user['token'] = response.headers['access-token']
						user['uid'] = response.headers['uid']
						user['type'] = response.headers['token-type']
						user['client'] = response.headers['client']
						resolve(user);
					}
				)
		},
        logInUser:async (_, { session }) => {
            return axios
                .post(`${URLLogsign}/ldap`, session)
                .then(
                    (response) => {
                        console.log(response.body.answer);
                        if (response.body.answer == "false"){
                            console.log("elifdel false");
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
                            resolve(user)
                        }else{
                            console.log("validacion eldab");
                            resolve(1)
    
    
                        }
                    }
                ).then(function(result){
                //console.log("validacion then");
                console.log(result);
                if (result != 1){
                    //resolve(result)
                    return result
                }else{ console.log("sending else");
                console.log(session);
    
                    return new Promise((resolve, reject) => {
                        return axios
                        .post(`${URLLogsign}/auth/sign_in`,session, true).then(
                            (response) => {
                                console.log(response.statusCode);
                                if(response.statusCode>300){
    
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
                                    error : response.error.errors[0]
                                }
                                resolve(user)
                                }else{
    
                                //console.log("Server response => ", response);
                                let user = response.body.data
                                user['token'] = response.headers['access-token']
                                user['uid'] = response.headers['uid']
                                user['type'] = response.headers['token-type']
                                user['client'] = response.headers['client']
                                resolve(user);
                                }
                            }
                        )
                    })
                }
    
            })               
        },        
        
    },
};

module.exports =  resolvers;
