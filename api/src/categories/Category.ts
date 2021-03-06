import { data } from "./data";
import { UserInputError } from 'apollo-server';
import { findKeywords } from "../http/datamuse";

export type CategoryType = {
    name: string,
    keywords: string[]
}

const getKeyword = (name: string, keyword: string) => {
    const category = getCategory(name);
    return category.keywords.find((word: string) => word.toUpperCase() === keyword.toUpperCase());
}

export const getAllCategories = () => data.categories;

export const getCategory = (name: string) => {
    if (!name) throw new UserInputError('You need to inform a category name');
    return data.categories.find((cat: CategoryType) => cat.name.toUpperCase() === name.toUpperCase())
};

export const addCategory = async (name: string) => {
    if (!name) throw new UserInputError('You need to inform a category name');
    if (getCategory(name)) throw new UserInputError("This category already exists");
    try {
        const resp = await findKeywords(name);
        const keywords: string[] = resp.data.slice(0, 10).map((keyword: any) => keyword.word);
        data.categories.push({name, keywords});
    } catch (err) {
        throw new UserInputError(err.toString());
    }
    return true;
};

export const removeCategory = (name: string) => {
    if (!name) throw new UserInputError("You need to inform a category name");
    if (!getCategory(name)) throw new UserInputError("This category doesn't exists");
    data.categories = data.categories.filter((category: CategoryType) => category.name !== name);
    return true;
};

export const addKeyword = (name: string, keyword: string) => {
    if (!name) throw new UserInputError("You need to inform a category name");
    if (!keyword) throw new UserInputError("You need to inform a category name");
    if (!getCategory(name)) throw new UserInputError("This category doesn't exists");
    if (getKeyword(name, keyword)) throw new UserInputError("This keyword already exists");

    data.categories.map((cat: CategoryType) => {
        if (cat.name === name) {
            cat.keywords.push(keyword);
        }
    });
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

export const cleanDatabase = () => {
    data.categories = [];
}