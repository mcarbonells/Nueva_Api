"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config();
var url = "http://host.docker.internal:3000/examLevel";
var urlW = "http://host.docker.internal:3000/weekQuiz";
var urlQ = "http://host.docker.internal:3000/userQuiz";
var resolvers = {
  Query: {
    allExamLevels: function () {
      var _allExamLevels = _asyncToGenerator(function* (_) {
        return axios.get("".concat(url, "/AllExams")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allExamLevels(_x) {
        return _allExamLevels.apply(this, arguments);
      }

      return allExamLevels;
    }(),
    examById: function () {
      var _examById = _asyncToGenerator(function* (_, _ref) {
        var {
          userId
        } = _ref;
        return axios.get("".concat(url, "/userExamLevel/").concat(userId)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function examById(_x2, _x3) {
        return _examById.apply(this, arguments);
      }

      return examById;
    }(),
    allWeekQuiz: function () {
      var _allWeekQuiz = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlW, "/Quizes")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allWeekQuiz(_x4) {
        return _allWeekQuiz.apply(this, arguments);
      }

      return allWeekQuiz;
    }(),
    weekQuizById: function () {
      var _weekQuizById = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlW, "/thisWeekQuiz")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function weekQuizById(_x5) {
        return _weekQuizById.apply(this, arguments);
      }

      return weekQuizById;
    }(),
    allUserQuiz: function () {
      var _allUserQuiz = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlQ, "/userQuizes")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allUserQuiz(_x6) {
        return _allUserQuiz.apply(this, arguments);
      }

      return allUserQuiz;
    }(),
    userQuizByIdQuiz: function () {
      var _userQuizByIdQuiz = _asyncToGenerator(function* (_, _ref2) {
        var {
          idQuiz
        } = _ref2;
        return axios.get("".concat(urlQ, "/usersQuizes/").concat(idQuiz)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function userQuizByIdQuiz(_x7, _x8) {
        return _userQuizByIdQuiz.apply(this, arguments);
      }

      return userQuizByIdQuiz;
    }(),
    userQuizByUserId: function () {
      var _userQuizByUserId = _asyncToGenerator(function* (_, _ref3) {
        var {
          userId
        } = _ref3;
        return axios.get("".concat(urlQ, "/quizOfUser/").concat(userId)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function userQuizByUserId(_x9, _x10) {
        return _userQuizByUserId.apply(this, arguments);
      }

      return userQuizByUserId;
    }()
  },
  Mutation: {
    createExam: function () {
      var _createExam = _asyncToGenerator(function* (_, _ref4) {
        var {
          body
        } = _ref4;
        return axios.post("".concat(url, "/newExamLevel/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createExam(_x11, _x12) {
        return _createExam.apply(this, arguments);
      }

      return createExam;
    }(),
    updateExam: function () {
      var _updateExam = _asyncToGenerator(function* (_, _ref5) {
        var {
          body
        } = _ref5;
        return axios.put("".concat(url, "/completeExamLevel"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateExam(_x13, _x14) {
        return _updateExam.apply(this, arguments);
      }

      return updateExam;
    }(),
    deleteExam: function () {
      var _deleteExam = _asyncToGenerator(function* (_, _ref6) {
        var {
          body
        } = _ref6;
        return axios.delete("".concat(url, "/deleteExamLevel"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteExam(_x15, _x16) {
        return _deleteExam.apply(this, arguments);
      }

      return deleteExam;
    }(),
    createWeekQuiz: function () {
      var _createWeekQuiz = _asyncToGenerator(function* (_, _ref7) {
        var {
          body
        } = _ref7;
        return axios.post("".concat(urlW, "/newQuiz/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createWeekQuiz(_x17, _x18) {
        return _createWeekQuiz.apply(this, arguments);
      }

      return createWeekQuiz;
    }(),
    updateWeekQuiz: function () {
      var _updateWeekQuiz = _asyncToGenerator(function* (_, _ref8) {
        var {
          body
        } = _ref8;
        return axios.put("".concat(urlW, "/deactivateQuiz/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateWeekQuiz(_x19, _x20) {
        return _updateWeekQuiz.apply(this, arguments);
      }

      return updateWeekQuiz;
    }(),
    deleteWeekQuiz: function () {
      var _deleteWeekQuiz = _asyncToGenerator(function* (_, _ref9) {
        var {
          body
        } = _ref9;
        return axios.delete("".concat(urlW, "/deleteQuiz/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteWeekQuiz(_x21, _x22) {
        return _deleteWeekQuiz.apply(this, arguments);
      }

      return deleteWeekQuiz;
    }(),
    createUserQuiz: function () {
      var _createUserQuiz = _asyncToGenerator(function* (_, _ref10) {
        var {
          body
        } = _ref10;
        return axios.post("".concat(urlQ, "/newQuiz/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createUserQuiz(_x23, _x24) {
        return _createUserQuiz.apply(this, arguments);
      }

      return createUserQuiz;
    }(),
    deleteUserQuiz: function () {
      var _deleteUserQuiz = _asyncToGenerator(function* (_, _ref11) {
        var {
          body
        } = _ref11;
        return axios.delete("".concat(urlQ, "/deleteUserQuiz/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteUserQuiz(_x25, _x26) {
        return _deleteUserQuiz.apply(this, arguments);
      }

      return deleteUserQuiz;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map