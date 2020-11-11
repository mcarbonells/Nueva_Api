const { gql } = require('apollo-server');

const typeDefs = gql`
    extend type Query {
        allCategories: [Category]
        categoryByName(name: String): [Category]
        categoryByLevel(level: String): [Category]
        allWords: [Words]
        wordsByName(name: String): [Words]
        wordsByCategory(category: String): [Words]
    }
    type Category {
         name: String
         level: String
    }
    input CategoryInput {
         name: String
         level: String
    }
    type Words {
        name: String
        category: String
        image: String
        linkW: String
        meaning: String
    }
    input WordsInput {
        name: String
        category: String
        image: String
        linkW: String
        meaning: String
    }
    extend type Mutation {
        createCategory(body: CategoryInput): Category
        updateCategory(body: CategoryInput): Category
        deleteCategory(body: CategoryInput): Category
        createWord(body: WordsInput): Words
        updateWord(body: WordsInput): Words
        deleteWord(body: WordsInput): Words
    }
`;
module.exports = typeDefs;