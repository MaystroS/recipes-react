import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "./layout";
import {Container} from "@material-ui/core";
import {About, Category, Contacts, Home, Meal, NotFound} from "./pages";

function App() {
	return (
		<>
			<Router>
				<Header/>
				<main className='main'>
					<Container maxWidth="lg">
						<Switch>
							<Route exact path='/' component={Home}/>
							<Route path='/categories/:name' component={Category}/>
							<Route path='/meal/:id' component={Meal}/>
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
