import React from 'react';
import {Route, Switch} from 'react-router-dom';

import './App.css';



import Homepage from './pages/homepage/homepage.component';
import Navs from './components/navigation/nav.component';



function App() {
	return (
		<div className="App">
			<Navs />
			<Switch>
				<Route exact path='/' component={Homepage} />

			</Switch>
		</div>
	);
}

export default App;
