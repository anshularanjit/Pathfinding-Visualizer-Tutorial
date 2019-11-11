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
import PathfindingVisualizer from './PathfindingVisualizer/PathfindingVisualizer';

var __html = require('./homepage.html');
var template = { __html: __html };




function App() {
  return (
	<Router>
		<Switch>
			// Open the homepage
			

			<Route path="/visualizer" render={props => 
    				(<div className="App">
      					<PathfindingVisualizer/> 
    				</div>) } >
			</Route>
	  <Route path="/">
				<div dangerouslySetInnerHTML={template} />
			</Route>
		</Switch>
	</Router>
  );
}

export default App;
