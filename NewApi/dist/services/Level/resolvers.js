"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config(); //const url = process.env.URI_UN;

var urlclass = "http://localhost:9000/classification";
var urlprog = "http://localhost:9000/progress";
var resolvers = {
  Query: {
    allClassification: function () {
      var _allClassification = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlclass, "/allClassification")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allClassification(_x) {
        return _allClassification.apply(this, arguments);
      }

      return allClassification;
    }(),
    classificationById: function () {
      var _classificationById = _asyncToGenerator(function* (_, _ref) {
        var {
          id
        } = _ref;
        return axios.get("".concat(urlclass, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function classificationById(_x2, _x3) {
        return _classificationById.apply(this, arguments);
      }

      return classificationById;
    }(),
    allProgress: function () {
      var _allProgress = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlprog, "/allProgress")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allProgress(_x4) {
        return _allProgress.apply(this, arguments);
      }

      return allProgress;
    }(),
    progressById: function () {
      var _progressById = _asyncToGenerator(function* (_, _ref2) {
        var {
          id
        } = _ref2;
        return axios.get("".concat(urlprog, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function progressById(_x5, _x6) {
        return _progressById.apply(this, arguments);
      }

      return progressById;
    }()
  },
  Mutation: {
    createClassification: function () {
      var _createClassification = _asyncToGenerator(function* (_, _ref3) {
        var {
          classification
        } = _ref3;
        return axios.post("".concat(urlclass, "/"), classification).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createClassification(_x7, _x8) {
        return _createClassification.apply(this, arguments);
      }

      return createClassification;
    }(),
    updateClassification: function () {
      var _updateClassification = _asyncToGenerator(function* (_, _ref4) {
        var {
          id,
          classification
        } = _ref4;
        return axios.put("".concat(urlclass, "/").concat(id), classification).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateClassification(_x9, _x10) {
        return _updateClassification.apply(this, arguments);
      }

      return updateClassification;
    }(),
    deleteClassification: function () {
      var _deleteClassification = _asyncToGenerator(function* (_, _ref5) {
        var {
          id
        } = _ref5;
        return axios.delete("".concat(urlclass, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteClassification(_x11, _x12) {
        return _deleteClassification.apply(this, arguments);
      }

      return deleteClassification;
    }(),
    createProgress: function () {
      var _createProgress = _asyncToGenerator(function* (_, _ref6) {
        var {
          progress
        } = _ref6;
        return axios.post("".concat(urlprog, "/"), progress).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createProgress(_x13, _x14) {
        return _createProgress.apply(this, arguments);
      }

      return createProgress;
    }(),
    updateProgress: function () {
      var _updateProgress = _asyncToGenerator(function* (_, _ref7) {
        var {
          id,
          progress
        } = _ref7;
        return axios.put("".concat(urlprog, "/").concat(id), progress).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateProgress(_x15, _x16) {
        return _updateProgress.apply(this, arguments);
      }

      return updateProgress;
    }(),
    deleteProgress: function () {
      var _deleteProgress = _asyncToGenerator(function* (_, _ref8) {
        var {
          id
        } = _ref8;
        return axios.delete("".concat(urlprog, "/").concat(id)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteProgress(_x17, _x18) {
        return _deleteProgress.apply(this, arguments);
      }

      return deleteProgress;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map