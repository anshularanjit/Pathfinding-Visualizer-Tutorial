//npm i -S react-router-dom

import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

var __html = require('./homepage.html');
var template = { __html: __html };


import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';


function App() {
  return (
	<Router>
		<Switch>
			// Open the homepage
			<Route path="/">
				<div dangerouslySetInnerHTML={template} />
			</Route>

			<Route path="/visualizer">
    				<div className="App">
      					<PathfindingVisualizer/>
    				</div>
			</Route>
		</Switch>
	</Router>
  );
}

export default App;
