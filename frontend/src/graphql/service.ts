import { gql } from '@apollo/client';
import { GraphQLClient } from './config';

export const getAllCategories = () => {
    return GraphQLClient.query({
            query: gql`
                query {categories {
                    name,
                    keywords
                }}
            `
            })   
}

export const getCategory = (name: string) => {     
    return GraphQLClient.query({
            query: gql`
                query GetCategory($name: String) {
                    getCategory(name: $name) {name, keywords}
                }
            `,
            variables: {name}
        })   
}

export const addKeyword = (name: string, keyword: string) => {
    return GraphQLClient.query({
            query: gql`
                query AddKeyword($name: String, $keyword: String) {
                    addKeyword(name: $name, keyword: $keyword)
                }
            `,
            variables: {name, keyword}
            })   
}
