import { addCategory, addKeyword, getAllCategories, getCategory, removeCategory, removeKeyword } from "./Category";

export const resolvers = {
    Query: {
        categories: () => getAllCategories(),
        getCategory: (root, args) => getCategory(args.name),
        addCategory: (root, args) => addCategory(args.name, args.keywords),
        removeCategory: (root, args) => removeCategory(args.name),     
        addKeyword: (root, args) => addKeyword(args.name, args.keyword),   
        removeKeyword: (root, args) => removeKeyword(args.name, args.keyword)   
    },
};
