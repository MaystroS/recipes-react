import React from 'react';
import {useHistory, useParams} from 'react-router-dom';
import {getFilteredByCategory} from "../services/http";
import {Button, LinearProgress} from "@material-ui/core";
import MealList from "../components/MealList";

function Category() {
	const {goBack} = useHistory();
	const {name} = useParams();
	const [meals, setMeals] = React.useState([]);
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		//return;
		setIsLoading(true);
		getFilteredByCategory(name)
			.then(m => setMeals(m))
			.finally(() => setIsLoading(false));
	}, [name]);

	return (
		<>
			<Button
				variant='contained'
				color='primary'
				style={{marginBottom: 24}}
				onClick={goBack}
			>
				Go Back
			</Button>
			{isLoading ?
				<LinearProgress/> :
				<MealList meals={meals}/>}
		</>
	);
}

export {Category};
