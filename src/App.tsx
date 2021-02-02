import React, { useCallback } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Home } from "./views/Home";
import { Basics } from "./views/Basics";
import { Grid } from "./views/Grid";

import "./app.scss";

/*
- tti performance in React
- Runtime performance (talk base)
- Google RAIL performance model

- How do we measure performance?
- Where in the devtools do we track performance?
- Is my app having trouble with performance? (look for sites with performance issues as an example)
- "Problems" you're going to live with (examples of performance we don't have control over)

Examples:

* blocks from an array that changes when clicked
* list with images
* show a component and pure-component
* image optimization
* show tool that shows what is being re-rendered
*/

const App = () => (
	<Router>
		<nav>
			<ul>
				<li>
					<Link to="/">Home 🏠</Link>
				</li>
				<li>
					<Link to="/basics">Basics 📔</Link>
				</li>
				<li>
					<Link to="/grid">Grid 🔲</Link>
				</li>
				<li>
					<Link to="/grid">Images 🖼</Link>
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
