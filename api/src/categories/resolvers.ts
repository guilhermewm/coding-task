import { addCategory, getAllCategories, getCategory, removeCategory, removeKeyword } from "./Category";

export const resolvers = {
    Query: {
        categories: () => getAllCategories(),
        getCategory: (root, args) => getCategory(args.name),
        addCategory: (root, args) => addCategory(args.name, args.keywords),
        removeCategory: (root, args) => removeCategory(args.name),     
        removeKeyword: (root, args) => removeKeyword(args.name, args.keyword)   
    },
};
