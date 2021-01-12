import { Category } from "../Category/types";

export type CategoryListProps = {
  categories: Category[];
  onChangeCategory: Function;
};