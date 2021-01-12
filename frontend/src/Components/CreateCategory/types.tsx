import { Category } from "../Category/types";

export type CreateCategoryProps = {
    createCategory: (name: string) => void,
    error: string,
    success: string,
    loading: boolean
};