import React, { FC } from "react";
import './styles.scss';

const CreateCategory: FC<any> = () => {
  return (
    <>
      <section className="empty-detail">
        <div>
          <p>
            Welcome to the application! 
            Try to add a new category.
          </p>
        </div>
      </section>      
    </>
  );
};

export default CreateCategory;
