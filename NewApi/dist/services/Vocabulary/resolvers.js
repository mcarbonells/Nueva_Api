"use strict";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

var axios = require('axios');

var dotenv = require('dotenv');

dotenv.config();
var urlC = "http://localhost:3001/category";
var urlW = "http://localhost:3001/words";
var resolvers = {
  Query: {
    allCategories: function () {
      var _allCategories = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlC, "/AllCategories")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allCategories(_x) {
        return _allCategories.apply(this, arguments);
      }

      return allCategories;
    }(),
    categoryByName: function () {
      var _categoryByName = _asyncToGenerator(function* (_, _ref) {
        var {
          name
        } = _ref;
        return axios.get("".concat(urlC, "/category/").concat(name)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function categoryByName(_x2, _x3) {
        return _categoryByName.apply(this, arguments);
      }

      return categoryByName;
    }(),
    categoryByLevel: function () {
      var _categoryByLevel = _asyncToGenerator(function* (_, _ref2) {
        var {
          level
        } = _ref2;
        return axios.get("".concat(urlC, "/levelCategory/").concat(level)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function categoryByLevel(_x4, _x5) {
        return _categoryByLevel.apply(this, arguments);
      }

      return categoryByLevel;
    }(),
    allWords: function () {
      var _allWords = _asyncToGenerator(function* (_) {
        return axios.get("".concat(urlW, "/AllWords")).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function allWords(_x6) {
        return _allWords.apply(this, arguments);
      }

      return allWords;
    }(),
    wordsByCategory: function () {
      var _wordsByCategory = _asyncToGenerator(function* (_, _ref3) {
        var {
          category
        } = _ref3;
        return axios.get("".concat(urlW, "/categoryWord/").concat(category)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function wordsByCategory(_x7, _x8) {
        return _wordsByCategory.apply(this, arguments);
      }

      return wordsByCategory;
    }(),
    wordsByName: function () {
      var _wordsByName = _asyncToGenerator(function* (_, _ref4) {
        var {
          name
        } = _ref4;
        return axios.get("".concat(urlW, "/word/").concat(name)).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function wordsByName(_x9, _x10) {
        return _wordsByName.apply(this, arguments);
      }

      return wordsByName;
    }()
  },
  Mutation: {
    createCategory: function () {
      var _createCategory = _asyncToGenerator(function* (_, _ref5) {
        var {
          body
        } = _ref5;
        return axios.post("".concat(urlC, "/newCategory/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createCategory(_x11, _x12) {
        return _createCategory.apply(this, arguments);
      }

      return createCategory;
    }(),
    updateCategory: function () {
      var _updateCategory = _asyncToGenerator(function* (_, _ref6) {
        var {
          body
        } = _ref6;
        return axios.put("".concat(urlC, "/updateCategory"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateCategory(_x13, _x14) {
        return _updateCategory.apply(this, arguments);
      }

      return updateCategory;
    }(),
    deleteCategory: function () {
      var _deleteCategory = _asyncToGenerator(function* (_, _ref7) {
        var {
          body
        } = _ref7;
        return axios.put("".concat(urlC, "/deleteCategory"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteCategory(_x15, _x16) {
        return _deleteCategory.apply(this, arguments);
      }

      return deleteCategory;
    }(),
    createWord: function () {
      var _createWord = _asyncToGenerator(function* (_, _ref8) {
        var {
          body
        } = _ref8;
        return axios.post("".concat(urlW, "/newWord"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function createWord(_x17, _x18) {
        return _createWord.apply(this, arguments);
      }

      return createWord;
    }(),
    updateWord: function () {
      var _updateWord = _asyncToGenerator(function* (_, _ref9) {
        var {
          body
        } = _ref9;
        return axios.put("".concat(urlW, "/updateWord/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function updateWord(_x19, _x20) {
        return _updateWord.apply(this, arguments);
      }

      return updateWord;
    }(),
    deleteWord: function () {
      var _deleteWord = _asyncToGenerator(function* (_, _ref10) {
        var {
          body
        } = _ref10;
        return axios.delete("".concat(urlW, "/deleteWord/"), body).then(res => {
          return res.data;
        }).catch(() => {
          console.log("F");
        });
      });

      function deleteWord(_x21, _x22) {
        return _deleteWord.apply(this, arguments);
      }

      return deleteWord;
    }()
  }
};
module.exports = resolvers;
//# sourceMappingURL=resolvers.js.map