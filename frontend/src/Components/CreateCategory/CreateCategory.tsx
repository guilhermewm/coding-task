import React, { FC } from "react";
import Form from "../Form/Form";
import { CreateCategoryProps } from "./types";

import './styles.scss';

const CreateCategory: FC<CreateCategoryProps> = ({createCategory, error, success}) => {
   
  return (
    <>
      <section className="empty-detail">
        <div>
          <p>
            Welcome to the application! 
            Try to add a new category.
          </p>
        </div>
        <div className="form">
          <Form type={'category'} submit={createCategory} error={error} success={success} />
        </div>
      </section>      
    </>
  );
};

export default CreateCategory;
