import React, { FC } from "react";
import Category from "../Category/Category";
import Header from "../Header/Header";
import { CategoryListProps } from "./types";
import { Link } from "react-router-dom";

import './styles.scss';

const CategoryList: FC<CategoryListProps> = ({ categories, changeCategory }) => {
  return (
    <>
      <Header>
        <h1>Categories</h1>
        <Link to={{search: ''}}> 
          <svg className="add" onClick={() => changeCategory({})}
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            viewBox="0 0 52 52"
          >
            <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
            <path d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
          </svg>   
        </Link>
      </Header>
       {!!categories.length && (
         <ul className="category-list">
          {categories?.map((category, index) => (
            <li key={index} onClick={() => changeCategory(category)}>
              <Category category={category} />
            </li>
          ))}
         </ul>
       )}        
    </>
  );
};

export default CategoryList;
