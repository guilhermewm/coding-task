import React, { useEffect, useState } from 'react';
import { Category } from '../../Components/Category/types';
import CategoryDetail from '../../Components/CategoryDetail/CategoryDetail';
import CategoryList from '../../Components/CategoryList/CategoryList';
import CreateCategory from '../../Components/CreateCategory/CreateCategory';
import { getAllCategories } from '../../graphql/service';

import './styles.scss';


const Home: React.FC = () => {
	const [categories, setCategories] = useState<Category[]>([]);
	const [categoryName, setCategoryName] = useState<string>(new URLSearchParams(window.location.search).get('name') || '');

	const fetchDate = async () => {
		try {
			const resp = await getAllCategories();
			console.log(resp);
			setCategories(resp.data.categories);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		fetchDate();
	}, []);

	const changeCategory = async (category: Category) => {
		setCategoryName(category.name);
	};

	return (
		<>
			<div className="main">
				<section className="sidebar">
					<nav>
						<CategoryList categories={categories} changeCategory={changeCategory} />
					</nav>
				</section>
				<section className="category-detail">
					{categoryName ? (
						<CategoryDetail categoryName={categoryName}></CategoryDetail>
					) : (
						<CreateCategory />
					)}
				</section>
			</div>				
		</>
	)
}

export default Home;
