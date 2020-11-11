const { gql } = require('apollo-server');

const typeDefs = gql`

    extend type Query {
        allClassification: [Classification]
        classificationById(id: Int): Classification

        allProgress: [Progress]
        progressById(id: Int): Progress
    }

    type Classification {
        id: Int
        level: String
        type: String
    }

    input ClassificationInput {
        level: String
        type: String
    }

    type Progress {
        id: Int
        type: String
        name: String
        advance: Float
        enable: Boolean
    }
    input ProgressInput {
        type: String
        name: String
        advance: Float
        enable: Boolean
    }
    
    extend type Mutation {
        createClassification(classification: ClassificationInput): Classification
        updateClassification(id: Int, classification: ClassificationInput): Classification
        deleteClassification(id: Int): Int

        createProgress(progress: ProgressInput): Progress
        updateProgress(id: Int, progress: ProgressInput): Progress
        deleteProgress(id: Int): Int
    }`;

module.exports = typeDefs;

