const { gql } = require("apollo-server");

export const typeDef = gql`   
    type Category {
        name: String
        keywords: [String]
    }

    type Response {
        message: String
    }

    extend type Query {
        categories: [Category],
        getCategory(name: String): Category,
        addCategory(name: String, keywords: [String]): Boolean,
        removeCategory(name: String): Boolean,
        removeKeyword(name: String, keyword: String): Boolean
    }
`;
