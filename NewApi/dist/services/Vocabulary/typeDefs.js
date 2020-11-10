"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allCategories: [Category]\n        categoryByName(name: String): [Category]\n        categoryByLevel(level: String): [Category]\n        allWords: [Words]\n        wordsByName(name: String): [Words]\n        wordsByCategory(category: String): [Words]\n    }\n    type Category {\n         name: String\n         level: String\n    }\n    input CategoryInput {\n         name: String\n         level: String\n    }\n    type Words {\n        name: String\n        category: String\n        image: String\n        linkW: String\n        meaning: String\n    }\n    input WordsInput {\n        name: String\n        category: String\n        image: String\n        linkW: String\n        meaning: String\n    }\n    extend type Mutation {\n        createCategory(body: CategoryInput): Category\n        updateCategory(body: CategoryInput): Category\n        deleteCategory(body: CategoryInput): Category\n        createWord(body: WordsInput): Words\n        updateWord(body: WordsInput): Words\n        deleteWord(body: WordsInput): Words\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var {
  gql
} = require('apollo-server');

var typeDefs = gql(_templateObject());
module.exports = typeDefs;
//# sourceMappingURL=typeDefs.js.map