"use strict";

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    extend type Query {\n        allExamLevels: [ExamLevel]\n        examById(userId: Int): [ExamLevel]\n        allWeekQuiz: [WeekQuiz]\n        weekQuizById: [WeekQuiz]\n        allUserQuiz: [UserQuiz]\n        userQuizByIdQuiz(idQuiz: Int): [UserQuiz]\n        userQuizByUserId(userId: Int): [UserQuiz]\n    }\n\n    type ExamLevel {\n         _id: String\n         userId: Int\n         level: String\n         words: [String]\n         date: String\n         correctWords: [String]\n         pass: Boolean\n    }\n    input ExamLevelInput {\n        _id: String\n        userId: Int\n        level: String\n        words: [String]\n        date: String\n        correctWords: [String]\n        pass: Boolean\n    }\n    type WeekQuiz {\n          idQuiz: Int\n          words: [String]\n          date: String\n          active: Boolean\n    }\n    input WeekQuizInput {\n          idQuiz: Int\n          words: [String]\n          date: String\n          active: Boolean\n    }\n    type UserQuiz {\n          userId: Int\n          idQuiz: Int\n          words: [String]\n          date: String\n          correctWords: [String]\n          score: Int\n    }\n    input UserQuizInput {\n          userId: Int\n          idQuiz: Int\n          words: [String]\n          date: String\n          correctWords: [String]\n          score: Int\n    }\n    extend type Mutation {\n        createExam(body: ExamLevelInput): ExamLevel\n        updateExam(body: ExamLevelInput): ExamLevel\n        deleteExam(body: ExamLevelInput): ExamLevel\n        createWeekQuiz(body: WeekQuizInput): WeekQuiz\n        updateWeekQuiz(body: WeekQuizInput): WeekQuiz\n        deleteWeekQuiz(body: WeekQuizInput): WeekQuiz\n        createUserQuiz(body: UserQuizInput): UserQuiz\n        deleteUserQuiz(body: UserQuizInput): UserQuiz  \n    }\n"]);

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