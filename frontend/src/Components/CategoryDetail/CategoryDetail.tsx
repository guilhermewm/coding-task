import React, { FC, useEffect, useState } from "react";
import { CategoryDetailProps } from "./types";
import Header from "../Header/Header";
import Keyword from "../Keyword/Keyword";
import './styles.scss';
import { addKeyword, getCategory } from "../../graphql/service";
import { Category } from "../Category/types";

const CategoryDetail: FC<CategoryDetailProps> = ({ categoryName }) => {
  const [keyword, setKeyword] = useState('');
  const [category, setCategory] = useState<Category>({} as Category);
  const [error, setError] = useState();


  const fetchDate = async () => {
		try {
			const resp = await getCategory(categoryName);
			console.log(resp);
      setCategory(resp.data.getCategory);      
      setError('' as any);
		} catch (err) {
			console.log(err);
		} 
	}

	useEffect(() => {
    fetchDate();
	}, [categoryName]);

  const addNewKeyword = async (name: string, word: string) => {
    try {
      const resp = await addKeyword(name, word);
      setCategory({...category, keywords: [...category.keywords, word]});
      console.log(resp);      
      setError('' as any);
    } catch(err) {
      setError(err.toString());
    } 
  }

  return (
    <>
      <section className="category-detail">
        {category.name && (
          <>
            <Header>
              <h1>{category.name}</h1>
            </Header>
            <div className="keywords">
              {category.keywords.map((keyword, i) => (
                <Keyword key={i}>{keyword}</Keyword>
              ))}
            </div>
          
            <footer>
              <div>
                <form>
                  <input onChange={(evt) => setKeyword(evt.target.value)} name="keyword" value={keyword} type="text" placeholder="Keyword"></input>
                  <button onClick={() => addNewKeyword(category.name, keyword)} type="button">Add Keyword!</button>
                </form>
                {error && (<span>{error}</span>)}
              </div>              
            </footer>
          </>
        )}        
      </section>      
    </>
  );
};

export default CategoryDetail;
