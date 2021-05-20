import React from 'react';
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, withStyles} from "@material-ui/core";

const maxIngredients = 20;

const StyledTableRow = withStyles((theme) => ({
	root: {
		'&:nth-of-type(odd)': {
			backgroundColor: theme.palette.action.hover,
		},
	},
}))(TableRow);

function RecipeTable({recipe}) {
	const [rows, setRows] = React.useState([]);

	React.useEffect(() => {
		const rows = [];
		for (let i = 1; i <= maxIngredients; i++) {
			const name = recipe[`strIngredient${i}`];

			if (!name) break;
			rows.push({
				id: `strIngredient${i}`,
				name: recipe[`strIngredient${i}`],
				value: recipe[`strMeasure${i}`]
			});
		}
		setRows(rows);
	}, [recipe]);
	return (
		<TableContainer component={Paper}>
			<Table size='small'>
				<TableHead>
					<TableRow>
						<TableCell>Ingredient</TableCell>
						<TableCell>Measure</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{rows.map((row) => (
						<StyledTableRow key={row.id}>
							<TableCell component="th" scope="row">
								{row.name}
							</TableCell>
							<TableCell>{row.value}</TableCell>
						</StyledTableRow>
					))}
				</TableBody>
			</Table>
		</TableContainer>
	);
}

export default RecipeTable;
