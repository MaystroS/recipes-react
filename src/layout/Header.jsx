import {AppBar, Button, Toolbar} from "@material-ui/core";

export function Header() {

	return (
		<header>
			<AppBar position="sticky">
				<Toolbar style={{justifyContent: 'space-between'}}>
					<Button to="/" color="inherit">REACT SHOP</Button>
					{/*todo create normal links*/}
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</header>
	);
}
