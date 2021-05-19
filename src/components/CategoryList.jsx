import React from 'react';
import {Grid} from "@material-ui/core";
import CategoryItem from "./CategoryItem";

/**
 * @param {Category[]} categories
 * @return {JSX.Element}
 * @constructor
 */
function CategoryList({categories = []}) {
	return (
		<Grid
			container
			className="list"
			spacing={2}
			alignItems="stretch"
		>
			{categories.map(cat => (
				<Grid
					item
					lg={3} md={4} sm={6} xs={12}
					key={cat.idCategory}
				>
					<CategoryItem item={cat} />
				</Grid>
			))}
		</Grid>
	);
}

export default CategoryList;
