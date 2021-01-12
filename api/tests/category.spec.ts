import { expect } from "chai";
import { addCategory, addKeyword, CategoryType, cleanDatabase, getAllCategories, getCategory, removeCategory, removeKeyword } from "../src/categories/Category";

describe("getAllCategories()", () => {
    let categories;
    before(async () => {
        categories = [
            {
                name: "cars",
            },
            {
                name: "bikes",
            },
            {
                name: "fuit",
            }
        ]     
        await addCategory(categories[0].name);
        await addCategory(categories[1].name);
        await addCategory(categories[2].name);
    });

    afterEach(() => { cleanDatabase() });

    it("should get all categories", () => {        
        const resp: CategoryType[] = getAllCategories();       
        expect(resp.length).to.be.equal(categories.length);
    });
    
});

describe("addCategory(name: string)", () => {
    let category;
    before(() => {
        category = {
            name: "cars",
            keywords: ["audi", "bmw", "tires"]
        };
    });
    
    afterEach(() => { cleanDatabase() });

    it("should add a category in the database", () => {        
        addCategory(category.name).then(response => {
            const resp: CategoryType = getCategory(category.name);
            expect(response).to.be.true;
            expect(resp.name).to.be.equal(category.name);
            expect(resp.keywords.length).to.be.equal(10);
        });
    });

    it("should return error with empty category name", () => {        
        addCategory('').then(response => {
            expect(response).to.be.false;
        });
    });
});

describe("getCategory(name: string)", () => {
    let category;
    before(async () => {
        category = {
            name: "cars"
        };
        await addCategory(category.name);
    });
    
    afterEach(() => { cleanDatabase() });

    it("should get a category", () => {        
        const resp: CategoryType = getCategory(category.name);
        expect(resp.name).to.be.equal(category.name);
        expect(resp.keywords.length).to.be.equal(10);
    });
});

describe("removeCategory(name: string)", () => {
    let category;
    before(async () => {
        category = {
            name: "cars"
        };
        await addCategory(category.name);
    });
    
    afterEach(() => { cleanDatabase() });

    it("should remove a category", () => {        
        const resp: boolean = removeCategory(category.name);
        expect(resp).to.be.true;
    });
});

describe("addKeyword(name: string, keyword: string)", () => {
    let obj;
    before(async () => {
        obj = {
            name: "cars",
            keyword: "testMock"
        };
        await addCategory(obj.name);
    });
    
    afterEach(() => { cleanDatabase() });

    it("should add a keyword", () => {        
        const resp: any = addKeyword(obj.name, obj.keyword);
        expect(resp).to.be.true;
    });
});

describe("removeKeyword(name: string, keyword: string)", () => {
    let obj;
    before(async () => {
        obj = {
            name: "cars",
            keyword: "testMock"
        };
        await addCategory(obj.name);
        await addKeyword(obj.name, obj.keyword);
    });
    
    afterEach(() => { cleanDatabase() });

    it("should remove a keyword", () => {        
        const resp: any = removeKeyword(obj.name, obj.keyword);
        expect(resp).to.be.true;
    });
});