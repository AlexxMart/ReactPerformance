import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./views/Home";
import { Basics } from "./views/Basics";
import { Grid } from "./views/Grid";

import "./app.scss";


const App = () => (
	<Router>
		<nav>
			<ul>
				<li>
					<Link to="/">Home 🏠</Link>
				</li>
				<li>
					<Link to="/basics">Performance Devtools 🔧</Link>
				</li>
				<li>
					<Link to="/grid">Grid 🔲</Link>
				</li>
			</ul>
		</nav>
		<Switch>
			<Route path="/basics">
				<Basics />
			</Route>
			<Route path="/grid">
				<Grid />
			</Route>
			<Route exact path="/">
				<Home />
			</Route>
		</Switch>
	</Router>
);

export default App;
