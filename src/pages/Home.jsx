import React from 'react';
import {getAllCategories} from "../services/http";
import {LinearProgress} from "@material-ui/core";
import {useLocation, useHistory} from 'react-router-dom';
import CategoryList from "../components/CategoryList";
import Search from "../components/Search";

function Home() {
	const [categories, setCategories] = React.useState([]);
	const [filteredCategories, setFilteredCategories] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(true);

	const {pathname, search} = useLocation();
	const {push} = useHistory();

	const onSearch = (searchStr) => {
		setFilteredCategories(
			categories.filter(item =>
				item.strCategory.toLowerCase().includes(searchStr.toLowerCase()
				))
		);

		push({
			pathname,
			search: searchStr ? `?search=${searchStr}` : null
		});
	};

	React.useEffect(() => {
		getAllCategories()
			.then(cats => {
				setCategories(cats);
				setFilteredCategories(search ?
					cats.filter(item => item.strCategory.toLowerCase().includes(search.split('=')[1].toLowerCase()))
					: cats
				);
				setIsLoading(false);
			});
	}, []);

	return (
		<div>
			<Search onSearch={onSearch}/>
			{isLoading ?
				<LinearProgress/> :
				<CategoryList categories={filteredCategories}/>}
		</div>
	);
}

export {Home};
