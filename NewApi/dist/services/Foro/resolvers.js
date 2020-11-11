"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config();
var urlT = "http://localhost:4000/api/v1/threads";
var urlE = "http://localhost:4000/api/v1/entrys";
var resolvers = {
  Query: {
    allThreads: function () {
      var _allThreads = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlT)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allThreads(_x) {
        return _allThreads.apply(this, arguments);
      }

      return allThreads;
    }(),
    threadById: function () {
      var _threadById = _asyncToGenerator(function* (_, _ref) {
        var {
          id
        } = _ref;
        return axios.get("".concat(urlT, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function threadById(_x2, _x3) {
        return _threadById.apply(this, arguments);
      }

      return threadById;
    }(),
    threadByLevel: function () {
      var _threadByLevel = _asyncToGenerator(function* (_, _ref2) {
        var {
          id,
          active
        } = _ref2;
        return axios.get("".concat(urlT, "/level/").concat(id, "/").concat(active)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function threadByLevel(_x4, _x5) {
        return _threadByLevel.apply(this, arguments);
      }

      return threadByLevel;
    }(),
    allEntrys: function () {
      var _allEntrys = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlE)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allEntrys(_x6) {
        return _allEntrys.apply(this, arguments);
      }

      return allEntrys;
    }(),
    entryById: function () {
      var _entryById = _asyncToGenerator(function* (_, _ref3) {
        var {
          id
        } = _ref3;
        return axios.get("".concat(urlE, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function entryById(_x7, _x8) {
        return _entryById.apply(this, arguments);
      }

      return entryById;
    }(),
    entryThread: function () {
      var _entryThread = _asyncToGenerator(function* (_, _ref4) {
        var {
          id,
          active
        } = _ref4;
        return axios.get("".concat(urlE, "/thread/").concat(id, "/").concat(active)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function entryThread(_x9, _x10) {
        return _entryThread.apply(this, arguments);
      }

      return entryThread;
    }()
  },
  Mutation: {
    createThread: function () {
      var _createThread = _asyncToGenerator(function* (_, _ref5) {
        var {
          thread
        } = _ref5;
        return axios.post("".concat(urlT), thread).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createThread(_x11, _x12) {
        return _createThread.apply(this, arguments);
      }

      return createThread;
    }(),
    updateThread: function () {
      var _updateThread = _asyncToGenerator(function* (_, _ref6) {
        var {
          id,
          thread
        } = _ref6;
        return axios.put("".concat(urlT, "/").concat(id), thread).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateThread(_x13, _x14) {
        return _updateThread.apply(this, arguments);
      }

      return updateThread;
    }(),
    deleteThread: function () {
      var _deleteThread = _asyncToGenerator(function* (_, _ref7) {
        var {
          id
        } = _ref7;
        return axios.delete("".concat(urlT, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteThread(_x15, _x16) {
        return _deleteThread.apply(this, arguments);
      }

      return deleteThread;
    }(),
    createEntry: function () {
      var _createEntry = _asyncToGenerator(function* (_, _ref8) {
        var {
          entry
        } = _ref8;
        return axios.post("".concat(urlE), entry).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createEntry(_x17, _x18) {
        return _createEntry.apply(this, arguments);
      }

      return createEntry;
    }(),
    updateEntry: function () {
      var _updateEntry = _asyncToGenerator(function* (_, _ref9) {
        var {
          id,
          entry
        } = _ref9;
        return axios.put("".concat(urlE, "/").concat(id), entry).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateEntry(_x19, _x20) {
        return _updateEntry.apply(this, arguments);
      }

      return updateEntry;
    }(),
    deleteEntry: function () {
      var _deleteEntry = _asyncToGenerator(function* (_, _ref10) {
        var {
          id
        } = _ref10;
        return axios.delete("".concat(urlE, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteEntry(_x21, _x22) {
        return _deleteEntry.apply(this, arguments);
      }

      return deleteEntry;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map