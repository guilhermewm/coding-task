import { data } from "./data";
const {
    UserInputError,
  } = require('apollo-server');

export type CategoryType = {
    name: string,
    keywords: string[]
}

const getKeyword = (name: string, keyword: string) => {
    const category = getCategory(name);
    return category.keywords.find((word: string) => word === keyword);
}

export const getAllCategories = () => data.categories;

export const getCategory = (name: string) => {
    return data.categories.find((cat: CategoryType) => cat.name === name)
};

export const addCategory = (name: string, keywords: string[]) => {
    if (!name) throw new UserInputError('You need to inform a category name');
    if (getCategory(name)) throw new UserInputError("This category already exists");
    data.categories.push({name, keywords});
    return true;
};

export const removeCategory = (name: string) => {
    if (!name) throw new UserInputError("You need to inform a category name");
    if (!getCategory(name)) throw new UserInputError("This category doesn't exists");
    data.categories = data.categories.filter((category: CategoryType) => category.name !== name);
    return true;
};

export const removeKeyword = (name: string, keyword: string) => {
    if (!name) throw new UserInputError("You need to inform a category name");
    if (!keyword) throw new UserInputError("You need to inform a category name");
    if (!getCategory(name)) throw new UserInputError("This category doesn't exists");
    if (!getKeyword(name, keyword)) throw new UserInputError("This keyword doesn't exists");
    
    data.categories = data.categories.map((cat: CategoryType) => {
        if(cat.name === name) {
            cat.keywords = cat.keywords.filter(((word: string) => word !== keyword));
        }
        return cat;
    });
    
    return true;
};
