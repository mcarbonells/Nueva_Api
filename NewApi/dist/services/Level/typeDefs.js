"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n\n    extend type Query {\n        allClassification: [Classification]\n        classificationById(id: Int): Classification\n\n        allProgress: [Progress]\n        progressById(id: Int): Progress\n    }\n\n    type Classification {\n        id: Int\n        level: String\n        type: String\n    }\n\n    input ClassificationInput {\n        level: String\n        type: String\n    }\n\n    type Progress {\n        id: Int\n        type: String\n        name: String\n        advance: Float\n        enable: Boolean\n    }\n    input ProgressInput {\n        type: String\n        name: String\n        advance: Float\n        enable: Boolean\n    }\n    \n    extend type Mutation {\n        createClassification(classification: ClassificationInput): Classification\n        updateClassification(id: Int, classification: ClassificationInput): Classification\n        deleteClassification(id: Int): Int\n\n        createProgress(progress: ProgressInput): Progress\n        updateProgress(id: Int, progress: ProgressInput): Progress\n        deleteProgress(id: Int): Int\n    }"]);

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