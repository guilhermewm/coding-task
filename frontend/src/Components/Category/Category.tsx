import React, { FC } from "react";
import { CategoryProps } from "./types";
import './styles.scss';
import { Link } from "react-router-dom";

const CategoryCard: FC<CategoryProps> = ({category}) => {
  return (
    
    <Link to={{search: `?name=${category.name}`}}> 
      <div className="category">
        <strong>{category.name}</strong>
        <small>{category.keywords.join(', ')}</small>
      </div>
    </Link>
  
  );
};

export default CategoryCard;
