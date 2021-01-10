import { Category } from "../Category/types";

export type CategoryListProps = {
  categories: Category[];
  changeCategory: Function;
};