import React from 'react';
import {getAllCategories} from "../services/http";
import {LinearProgress} from "@material-ui/core";
import CategoryList from "../components/CategoryList";

function Home() {
	const [categories, setCategories] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	React.useEffect(() => {
		//return;
		getAllCategories()
			.then(cats => {
				setCategories(cats);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			{isLoading ?
				<LinearProgress /> :
				<CategoryList categories={categories} />}
		</div>
	);
}

export default Home;
