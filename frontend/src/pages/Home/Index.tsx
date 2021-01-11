import React, { useEffect, useState } from 'react';
import { Category } from '../../Components/Category/types';
import CategoryDetail from '../../Components/CategoryDetail/CategoryDetail';
import CategoryList from '../../Components/CategoryList/CategoryList';
import CreateCategory from '../../Components/CreateCategory/CreateCategory';
import { addCategory, getAllCategories } from '../../graphql/service';
import { findKeywords } from '../../service/category';

import './styles.scss';


const Home: React.FC = () => {
	const [error, setError] = useState<string>('');
	const [isLoading, setIsLoading] = useState<boolean>();
	const [categories, setCategories] = useState<Category[]>([]);
	const [categoryName, setCategoryName] = useState<string>(new URLSearchParams(window.location.search).get('name') || '');

	const [categoryError, setCategoryError] = useState<string>('');
	const [success, setSuccess] = useState<string>('');  

	const fetchData = async () => {
		try {
			setIsLoading(true);
			const resp = await getAllCategories();
			setCategories(resp.data.categories);
			setError('');
		} catch (err) {
			setError(err.toString());
		} finally {
			setIsLoading(false);
		}
	}

	const createCategory = async (name: string) => {
		try {
			const resp = await findKeywords(name);
			const keywords: string[] = resp.data.slice(0, 10).map((keyword: any) => keyword.word);
			await addCategory(name, keywords);
			setCategoryError('');
			setSuccess('Success!');
			fetchData();
		} catch (err) {
			setSuccess('');
			setCategoryError(err.toString());
		} 
	}

	useEffect(() => {
		fetchData();
	}, []);

	const changeCategory = async (category: Category) => {
		setCategoryName(category.name);
	};

	if (error) return (<>{`${error}`}</>);
	if (isLoading) return (<>Loading...</>);

	return (
		<>
			<div className="main">
				<section className="sidebar">
					<nav>
						<CategoryList categories={categories} changeCategory={changeCategory} />
					</nav>
				</section>
				<section className="category-detail">
					{categories.find(cat => cat?.name?.toUpperCase() === categoryName?.toUpperCase()) && categories.length ? (
						<CategoryDetail categoryName={categoryName}></CategoryDetail>
					) : (
						<CreateCategory createCategory={createCategory} error={categoryError} success={success} />
					)}
				</section>
			</div>				
		</>
	)
}

export default Home;
