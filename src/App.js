import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Header} from "./layout";
import {Container} from "@material-ui/core";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import NotFound from "./pages/NotFound";

function App() {
	return (
		<>
			<Router>
				<Header/>
				<main className='main'>
					<Container maxWidth="lg">
						<Switch>
							<Route exact path='/' component={Home}/>
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
