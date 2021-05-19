import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

/**
 * @param {Meal} item
 * @return {JSX.Element}
 * @constructor
 */
function MealItem({item}) {
	return (
		<Card className='card' elevation={2}>
			<div className="card__media">
				<CardMedia
					component="img"
					alt={item.strMeal}
					image={item.strMealThumb}
				/>
			</div>
			<CardContent className='card__content'>
				<Typography gutterBottom variant="h5" component="h2">
					{item.strMeal}
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					to={`/meal/${item.idMeal}`}
					component={RouterLink}
					color="primary"
				>
					More details
				</Button>
			</CardActions>
		</Card>
	);
}

export default MealItem;
