import React from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {getMealById} from "../services/http";
import {Button, LinearProgress, Typography} from "@material-ui/core";
import RecipeTable from "../components/RecipeTable";

function Recipe() {
	const {id} = useParams();
	const {goBack} = useHistory();
	const [recipe, setRecipe] = React.useState({});
	const [isLoading, setIsLoading] = React.useState(false);

	React.useEffect(() => {
		setIsLoading(true);
		getMealById(id)
			.then(r => {
				setRecipe(r);
			})
			.finally(() => setIsLoading(false));
	}, [id]);

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
				<div className='recipe'>
					<Typography gutterBottom variant="h4" component="h1">
						{recipe.strMeal}
					</Typography>
					<Typography gutterBottom variant="subtitle1" color='textSecondary' component="h3">
						category: {recipe.strCategory}
					</Typography>
					{
						recipe.strArea ?
							<Typography gutterBottom variant="subtitle1" color='textSecondary' component="h3">
								area: {recipe.strArea}
							</Typography> : null
					}

					<div className='recipe__image mb16'>
						<img src={recipe.strMealThumb} alt={recipe.strMeal}/>
					</div>
					<Typography className='recipe__desc' gutterBottom variant='body1' component='p'>
						{recipe.strInstructions}
					</Typography>

					{<div className='recipe__table mb16'>
						<RecipeTable recipe={recipe}/>
					</div>}

					{recipe.strYoutube ?
						<div className='recipe__video'>
							<iframe src={recipe.strYoutube.replace('watch?v=', 'embed/')}
							        title="YouTube video player" frameBorder="0"
							        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
							        allowFullScreen/>
						</div> : null
					}
				</div>
			}
		</>
	);
}

export {Recipe};
