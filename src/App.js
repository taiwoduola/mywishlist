import React from 'react';
import { Route, Switch } from 'react-router-dom';

import './App.css';

import Homepage from './pages/homepage/homepage.component';
import LikesPage from './pages/likepage/likespage.component';

function App() {
	return (
		<div className="App">
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route exact path="/wishlist" component={LikesPage} />
			</Switch>
		</div>
	);
}

export default App;
