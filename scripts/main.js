// Core
import React from 'react';
import { render } from 'react-dom';

// Router
import {Router, Route, browserHistory} from 'react-router';

// Components
import App from './components/App';
import StreamPicker from './components/StreamPicker';

// Routes
var routes = (
	<Router history={browserHistory}>
		<Route path="/" component={StreamPicker}/>
		<Route path="*" component={App}/>
	</Router>
);

render(routes, document.querySelector('#main'));