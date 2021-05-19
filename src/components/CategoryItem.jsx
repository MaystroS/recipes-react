import React from 'react';
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@material-ui/core";
import {Link as RouterLink} from 'react-router-dom';

/**
 * @param {Category} item
 * @return {JSX.Element}
 * @constructor
 */
function CategoryItem({item}) {
	return (
		<Card className='card' elevation={2}>
			<div className="card__media">
				<CardMedia
					component="img"
					alt={item.strCategory}
					image={item.strCategoryThumb}
				/>
			</div>
			<CardContent className='card__content'>
				<Typography gutterBottom variant="h5" component="h2">
					{item.strCategory}
				</Typography>
				<Typography variant="body2" color="textSecondary" className="card__desc">
					{item.strCategoryDescription.slice(0, 100)}...
				</Typography>
			</CardContent>
			<CardActions>
				<Button
					to={`/categories/${item.strCategory.toLowerCase()}`}
					component={RouterLink}
					color="primary"
				>
					More details
				</Button>
			</CardActions>
		</Card>
	);
}

export default CategoryItem;
