import { gql } from '@apollo/client';
import { GraphQLClient } from './config';

export const getAllCategories = () => {
    return GraphQLClient.query({
            query: gql`
                query {categories {
                    name,
                    keywords
                }}
            `,
            fetchPolicy: "network-only"
        })   
}

export const getCategory = (name: string) => {     
    return GraphQLClient.query({
            query: gql`
                query GetCategory($name: String) {
                    getCategory(name: $name) {name, keywords}
                }
            `,
            variables: {name},
            fetchPolicy: "network-only"
        })   
}

export const addCategory = (name: string, keywords: string[]) => {
    return GraphQLClient.query({
            query: gql`
                query AddCategory($name: String, $keywords: [String]) {
                    addCategory(name: $name, keywords: $keywords)
                }
            `,
            variables: {name, keywords},
            fetchPolicy: "network-only"
        })   
}

export const removeCategory = (name: string) => {
    return GraphQLClient.query({
            query: gql`
                query RemoveCategory($name: String) {
                    removeCategory(name: $name)
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
            variables: {name, keyword},
            fetchPolicy: "network-only"
        })       
}

export const removeKeyword = (name: string, keyword: string) => {
    return GraphQLClient.query({
            query: gql`
                query RemoveKeyword($name: String, $keyword: String) {
                    removeKeyword(name: $name, keyword: $keyword)
                }
            `,
            variables: {name, keyword}
        })       
}
