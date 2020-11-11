"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config();
var nodoPerfiles = 'ec2-3-88-4-72.compute-1.amazonaws.com'; //debe cambiarse el puerto por aws perfiles

var puertoPerfiles = '5002'; // se mantiene l puerto del microservicio 

var allProfiles = 'profiles';
var postProfile = 'profiles';
var editProfile = 'edit/profile';
var editPassword = 'edit/password';
var activeProfile = 'active/profile';
var URLAllPerfiles = "http://".concat(nodoPerfiles, ":").concat(puertoPerfiles, "/").concat(allProfiles);
var URLPostPerfiles = "http://".concat(nodoPerfiles, ":").concat(puertoPerfiles, "/").concat(postProfile);
var URLEditarPerfiles = "http://".concat(nodoPerfiles, ":").concat(puertoPerfiles, "/").concat(editProfile);
var URLEditarPassword = "http://".concat(nodoPerfiles, ":").concat(puertoPerfiles, "/").concat(editPassword);
var URLActivarPerfile = "http://".concat(nodoPerfiles, ":").concat(puertoPerfiles, "/").concat(activeProfile);
var resolvers = {
  Query: {
    allPerfiles: function () {
      var _allPerfiles = _asyncToGenerator(function* (_) {
        return axios.get("".concat(URLAllPerfiles)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("No hay todos los perfiles");
        });
      });

      function allPerfiles(_x) {
        return _allPerfiles.apply(this, arguments);
      }

      return allPerfiles;
    }(),
    profileById: function () {
      var _profileById = _asyncToGenerator(function* (_, _ref) {
        var {
          id
        } = _ref;
        return axios.get("".concat(URLAllPerfiles, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("No hay perfil con ese id");
        });
      });

      function profileById(_x2, _x3) {
        return _profileById.apply(this, arguments);
      }

      return profileById;
    }()
  },
  Mutation: {
    updateProfile: function () {
      var _updateProfile = _asyncToGenerator(function* (_, _ref2) {
        var {
          id,
          perfil
        } = _ref2;
        return axios.put("".concat(URLEditarPerfiles, "/").concat(id), perfil).then(res => {
          return res.data;
        }).catch(() => {
          console.log("El perfil no fue editado");
        });
      });

      function updateProfile(_x4, _x5) {
        return _updateProfile.apply(this, arguments);
      }

      return updateProfile;
    }(),
    updateProfilePassword: function () {
      var _updateProfilePassword = _asyncToGenerator(function* (_, _ref3) {
        var {
          id,
          perfil
        } = _ref3;
        return axios.put("".concat(URLEditarPassword, "/").concat(id), perfil).then(res => {
          return res.data;
        }).catch(() => {
          console.log("La contraseña del perfil no fue actualizada");
        });
      });

      function updateProfilePassword(_x6, _x7) {
        return _updateProfilePassword.apply(this, arguments);
      }

      return updateProfilePassword;
    }(),
    createProfile: function () {
      var _createProfile = _asyncToGenerator(function* (_, _ref4) {
        var {
          perfil
        } = _ref4;
        return axios.post("".concat(URLPostPerfiles), perfil).then(res => {
          return res.data;
        }).catch(() => {
          console.log("El perfil no fue creado");
        });
      });

      function createProfile(_x8, _x9) {
        return _createProfile.apply(this, arguments);
      }

      return createProfile;
    }(),
    deleteProfile: function () {
      var _deleteProfile = _asyncToGenerator(function* (_, _ref5) {
        var {
          id,
          perfil
        } = _ref5;
        return axios.put("".concat(URLActivarPerfile, "/").concat(id), perfil).then(res => {
          return res.data;
        }).catch(() => {
          console.log("El perfil sigue activo");
        });
      });

      function deleteProfile(_x10, _x11) {
        return _deleteProfile.apply(this, arguments);
      }

      return deleteProfile;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map