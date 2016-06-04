// Core
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {Router, Route, browserHistory} from 'react-router';

// Components
import App from './components/App';
import StreamPicker from './components/StreamPicker';
import NotFound from './components/NotFound';

// Routes
var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={StreamPicker}/>
		<Route path="/:streamId" component={App}/>
    	<Route path="*" component={NotFound}/>
	</Router>
);

ReactDOM.render(routes, document.querySelector('#main'));