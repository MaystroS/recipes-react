import React from 'react';
import {Grid} from "@material-ui/core";
import MealItem from "./MealItem";

/**
 * @param {Meal[]} meals
 * @return {JSX.Element}
 * @constructor
 */
function MealList({meals}) {
	return (
		<Grid
			container
			className="list"
			spacing={2}
			alignItems="stretch"
		>
			{meals.map(meal => (
				<Grid
					item
					lg={3} md={4} sm={6} xs={12}
					key={meal.idMeal}
				>
					<MealItem item={meal} />
				</Grid>
			))}
		</Grid>
	);
}

export default MealList;
