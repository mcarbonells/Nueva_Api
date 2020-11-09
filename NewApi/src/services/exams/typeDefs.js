const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        allExamLevels: [ExamLevel]
        examById(body: ExamLevelInput): [ExamLevel]
        allWeekQuiz: [WeekQuiz]
        weekQuizById(body: WeekQuizInput): [WeekQuiz]
        allUserQuiz: [UserQuiz]
        userQuizByIdQuiz(body: UserQuizInput): [UserQuiz]
        userQuizByUserId(body: UserQuizInput): [UserQuiz]
    }

    type ExamLevel {
         _id: String
         userId: Int
         level: String
         words: [String]
         date: String
         correctWords: [String]
         pass: Boolean
    }
    input ExamLevelInput {
        _id: String
        userId: Int
        level: String
        words: [String]
        date: String
        correctWords: [String]
        pass: Boolean
    }
    type WeekQuiz {
          idQuiz: Int
          words: [String]
          date: String
          active: Boolean
    }
    input WeekQuizInput {
          idQuiz: Int
          words: [String]
          date: String
          active: Boolean
    }
    type UserQuiz {
          userId: Int
          idQuiz: Int
          words: [String]
          date: String
          correctWords: [String]
          score: Int
    }
    input UserQuizInput {
          userId: Int
          idQuiz: Int
          words: [String]
          date: String
          correctWords: [String]
          score: Int
    }
    extend type Mutation {
        createExam(body: ExamLevelInput): ExamLevel
        updateExam(body: ExamLevelInput): ExamLevel
        deleteExam(body: ExamLevelInput): ExamLevel
        createWeekQuiz(body: WeekQuizInput): WeekQuiz
        updateWeekQuiz(body: WeekQuizInput): WeekQuiz
        deleteWeekQuiz(body: WeekQuizInput): WeekQuiz
        createUserQuiz(body: UserQuizInput): UserQuiz
        deleteUserQuiz(body: UserQuizInput): UserQuiz  
    }
`;

export default typeDefs;
