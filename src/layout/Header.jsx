import {AppBar, Button, Link, makeStyles, Toolbar, Typography} from "@material-ui/core";
import {Link as RouterLink} from "react-router-dom";

const useStyles = makeStyles(theme =>( {
	nav: {
		'& > *': {
			margin: theme.spacing(2),
		}
	}
}));

export function Header() {
	const classes = useStyles();

	return (
		<header>
			<AppBar position="sticky">
				<Toolbar style={{justifyContent: 'space-between'}}>
					<Button to="/" component={RouterLink} color="inherit">REACT SHOP</Button>
					<Typography className={classes.nav} component='nav'>
						<Link to='/' component={RouterLink} color='inherit'>Home</Link>
						<Link to='/about' component={RouterLink} color='inherit'>About</Link>
						<Link to='/contacts' component={RouterLink} color='inherit'>Contacts</Link>
					</Typography>
				</Toolbar>
			</AppBar>
		</header>
	);
}
