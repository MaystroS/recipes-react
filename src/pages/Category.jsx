import React from 'react';
import {useParams} from 'react-router-dom';
import {getFilteredByCategory} from "../services/http";
import {LinearProgress} from "@material-ui/core";
import MealList from "../components/MealList";

function Category() {
	const {name} = useParams();
	const [meals, setMeals] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);
	console.log('params', name)

	React.useEffect(() => {
		//return;
		setIsLoading(true);
		getFilteredByCategory(name)
			.then(m => {
				console.log('Meals', m)
				setMeals(m);
			})
			.finally(() => setIsLoading(false));
	}, [name]);

	return (
		<>
			{isLoading ?
				<LinearProgress/> :
				<MealList meals={meals}/>}
		</>
	);
}

export {Category};
