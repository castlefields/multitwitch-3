import React from 'react';

class App extends React.Component {
	renderStream(key) {
		let streamLink = 'https://player.twitch.tv/?muted=true&channel=' + key;
		return (
			<div className="col-sm-6" key={key}>
				<div className="embed-responsive embed-responsive-16by9">
					<iframe src={streamLink} frameborder="0" scrolling="no" className="embed-responsive-item" allowfullscreen></iframe>
				</div>
			</div>
		)
	}

	render() {
		const streamIds = this.props.routeParams.splat.split('/');
		return (
			<div className="container-fluid">
				<div className="row">
					{ streamIds.map(this.renderStream.bind(this)) }	
				</div>
			</div>
		)
	}
};

export default App;