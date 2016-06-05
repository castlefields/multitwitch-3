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
		<Route path="/:streamId(/:streamId2)(/:streamId3)(/:streamId4)" component={App}/>
	</Router>
);

render(routes, document.querySelector('#main'));