import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "./layout";
import {Container} from "@material-ui/core";
import {About, Category, Contacts, Home, Recipe, NotFound} from "./pages";

function App() {
	return (
		<>
			<Router basename='/recipes-react'>
				<Header/>
				<main className='main'>
					<Container maxWidth="lg">
						<Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/categories/:name' component={Category}/>
							<Route path='/recipe/:id' component={Recipe}/>
							<Route path='/about' component={About}/>
							<Route path='/contacts' component={Contacts}/>
							<Route component={NotFound}/>
						</Switch>
					</Container>
				</main>
			</Router>
		</>
	);
}

export default App;
