"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config();
var urlLogsign = "3.85.224.243";
var URLLogsign = "http://".concat(urlLogsign, ":", 5001);
var resolvers = {
  Query: {
    validateToken: function () {
      var _validateToken = _asyncToGenerator(function* (_, _ref) {
        var {
          headers
        } = _ref;
        return axios.get("".concat(URLLogsign, "/auth/validate_token"), {
          params: {
            'client': headers.client,
            'uid': headers.uid,
            'access-token': headers.token
          }
        }, true).then(response => {
          var user = response.data.data;
          user['token'] = response.headers['access-token'];
          user['type'] = response.headers['token-type'];
          user['client'] = response.headers.client;
          delete user['provider'];
          delete user['uid'];
          delete user['allow_password_change'];
          return user;
        }).catch(error => {
          var user = {
            id: -1,
            email: "",
            name: "",
            nickname: "",
            image: "",
            token: "",
            type: "",
            client: "",
            uid: "",
            error: "Invalid Token"
          };
          return user;
        });
      });

      function validateToken(_x, _x2) {
        return _validateToken.apply(this, arguments);
      }

      return validateToken;
    }()
  },
  Mutation: {
    logInUser_1: (_, _ref2) => {
      var {
        session
      } = _ref2;
      return axios.post("".concat(URLLogsign, "/auth/sign_in"), session).then(response => {
        console.log(response);
        var user = response.data.data;
        user['token'] = response.headers['access-token'];
        user['uid'] = response.headers.uid;
        user['type'] = response.headers['token-type'];
        user['client'] = response.headers.client;
        return user;
      }).catch(error => {
        console.log(error.response.data.errors);
        var user = {
          id: -1,
          email: "",
          name: "",
          nickname: "",
          image: "",
          token: "",
          type: "",
          client: "",
          uid: "",
          error: error.response.data.errors[0]
        };
        return user;
      });
    },
    registerUser: (_, _ref3) => {
      var {
        user
      } = _ref3;
      return axios.post("".concat(URLLogsign, "/auth/"), user).then(res => {
        //console.log("Server response => ", res);
        var user = res.data.data;
        user['token'] = res.headers['access-token'];
        user['uid'] = res.headers.uid;
        user['type'] = res.headers['token-type'];
        user['client'] = res.headers.client;
        return user;
      });
    },
    logInUser: function () {
      var _logInUser = _asyncToGenerator(function* (_, _ref4) {
        var {
          session
        } = _ref4;
        return axios.post("".concat(URLLogsign, "/ldap"), session).then(response => {
          console.log(response.data);

          if (response.data.answer == "false") {
            console.log("el if del false");
            var user = {
              id: -1,
              email: "",
              name: "",
              nickname: "",
              image: "",
              token: "",
              type: "",
              client: "",
              uid: "",
              error: "error en validacion de credenciales"
            };
            return user;
          } else {
            console.log("validacion eldab");
            return 1;
          }
        }).then(result => {
          //console.log("validacion then");
          console.log(result);

          if (result != 1) {
            //resolve(result)
            return result;
          } else {
            console.log("sending else");
            console.log("Session: ");
            console.log(session);
            return axios.post("".concat(URLLogsign, "/auth/sign_in"), session).then(response => {
              console.log(response.data);
              var user = response.data.data;
              user['token'] = response.headers['access-token'];
              user['uid'] = response.headers.uid;
              user['type'] = response.headers['token-type'];
              user['client'] = response.headers.client;
              return user;
            }).catch(error => {
              var user = {
                id: -1,
                email: "",
                name: "",
                nickname: "",
                image: "",
                token: "",
                type: "",
                client: "",
                uid: "",
                error: "error en validacion de credenciales"
              };
              return user;
            });
          }
        });
      });

      function logInUser(_x3, _x4) {
        return _logInUser.apply(this, arguments);
      }

      return logInUser;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map