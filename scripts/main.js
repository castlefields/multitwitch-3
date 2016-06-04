// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {Router, Route} from 'react-router';
import {createHistory} from 'history';

// Components
import App from './components/App';
import NotFound from './components/NotFound';

// Routes
var routes = (
	<Router history={createHistory()}>
		<Route path="/" component={App}/>
    	<Route path="*" component={NotFound}/>
	</Router>
);

ReactDOM.render(routes, document.querySelector('#main'));