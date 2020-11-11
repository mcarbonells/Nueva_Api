"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config();
var urlT = "http://localhost:8080/api/Ticket";
var resolvers = {
  Query: {
    allTickets: function () {
      var _allTickets = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlT)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allTickets(_x) {
        return _allTickets.apply(this, arguments);
      }

      return allTickets;
    }(),
    ticketById: function () {
      var _ticketById = _asyncToGenerator(function* (_, _ref) {
        var {
          id
        } = _ref;
        return axios.get("".concat(urlT, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function ticketById(_x2, _x3) {
        return _ticketById.apply(this, arguments);
      }

      return ticketById;
    }()
  },
  Mutation: {
    createTicket: function () {
      var _createTicket = _asyncToGenerator(function* (_, _ref2) {
        var {
          ticket
        } = _ref2;
        return axios.post("".concat(urlT), ticket).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createTicket(_x4, _x5) {
        return _createTicket.apply(this, arguments);
      }

      return createTicket;
    }(),
    updateTicket: function () {
      var _updateTicket = _asyncToGenerator(function* (_, _ref3) {
        var {
          id,
          ticket
        } = _ref3;
        return axios.put("".concat(urlT, "/").concat(id), ticket).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateTicket(_x6, _x7) {
        return _updateTicket.apply(this, arguments);
      }

      return updateTicket;
    }(),
    deleteTicket: function () {
      var _deleteTicket = _asyncToGenerator(function* (_, _ref4) {
        var {
          id
        } = _ref4;
        return axios.delete("".concat(urlT, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteTicket(_x8, _x9) {
        return _deleteTicket.apply(this, arguments);
      }

      return deleteTicket;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map