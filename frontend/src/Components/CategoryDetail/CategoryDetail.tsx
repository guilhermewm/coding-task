import React, { FC, useCallback, useEffect, useState } from "react";
import { CategoryDetailProps } from "./types";
import Header from "../Header/Header";
import Keyword from "../Keyword/Keyword";
import './styles.scss';
import { addKeyword, getCategory, removeCategory, removeKeyword } from "../../graphql/service";
import { Category } from "../Category/types";
import Form from "../Form/Form";
import { useHistory } from "react-router-dom";

const CategoryDetail: FC<CategoryDetailProps> = ({ categoryName }) => {
  const [category, setCategory] = useState<Category>({} as Category);
  const [error, setError] = useState<string>('');
  const [success, setSuccess] = useState<string>('');  
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [formLoading, setFormLoading] = useState<boolean>(false);

  const history = useHistory();

  const fetchData = useCallback( async() => {
		try {
      setIsLoading(true);
			const resp = await getCategory(categoryName);
      setCategory(resp.data.getCategory);
		} catch (err) {
      setError(err.toString());
      setSuccess('');
		} finally {
      setIsLoading(false);
    }
  }, [categoryName]);
  
	useEffect(() => {
    fetchData();
	}, [fetchData, categoryName]);

  const addNewKeyword = async (word: string) => {
    try {
      setFormLoading(true);
      await addKeyword(category.name, word);
      setSuccess('Success!');  
      setError('');
      fetchData();  
    } catch(err) {
      setError(err.toString());
      setSuccess('');
    } finally {
      setFormLoading(false);
    }
  }

  const deleteKeyword = async (word: string) => {
    try {
      setIsLoading(true);
      await removeKeyword(category.name, word);
      setSuccess('Success!');  
      setError(''); 
      fetchData();  
    } catch(err) {
      setError(err.toString());
      setSuccess('');
    } finally {
      setIsLoading(false);
    }
  }

  const deleteCategory = async () => {
    try {
      setIsLoading(true);
      await removeCategory(category.name);
      history.replace('/');
      window.location.reload(false);
      setError('');
    } catch (err) {
      setError(err.toString());
    } finally {
      setIsLoading(false);
    }
  }
  
  return (
    <>
      <section className="category-detail">
        {category?.name && (
          <>
            <Header>
              <h1>{category.name}</h1>
              <span onClick={() => deleteCategory()}>
                <svg className="remove"
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  viewBox="0 0 52 52"
                >
                  <path d="M26 0C11.664 0 0 11.663 0 26s11.664 26 26 26 26-11.663 26-26S40.336 0 26 0zm0 50C12.767 50 2 39.233 2 26S12.767 2 26 2s24 10.767 24 24-10.767 24-24 24z" />
                  <path d="M38.5 25H27V14c0-.553-.448-1-1-1s-1 .447-1 1v11H13.5c-.552 0-1 .447-1 1s.448 1 1 1H25v12c0 .553.448 1 1 1s1-.447 1-1V27h11.5c.552 0 1-.447 1-1s-.448-1-1-1z" />
                </svg>
              </span>
              
            </Header>
            <div className="keywords">
              {category.keywords.map((keyword, i) => (
                <Keyword key={i} removeKeyword={deleteKeyword}>{keyword}</Keyword>
              ))}
              {!category.keywords.length && (
                <>
                  No data.
                </>
              )}
            </div>          
            <footer>
              <div>
                <Form type={'keyword'} submit={addNewKeyword} error={error} success={success} loading={formLoading} /> 
              </div>              
            </footer>
          </>
        )} 
        {isLoading && (
          <>Loading...</>
        )}  

      </section>      
    </>
  );
};

export default CategoryDetail;
