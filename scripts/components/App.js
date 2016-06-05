import React from 'react';

class App extends React.Component {
	renderStream(key) {
		let streamId = this.props.routeParams[key];
		if (streamId) {
			let streamLink = 'https://player.twitch.tv/?channel=' + streamId;
			return (
				<div className="col-sm-6">
					<div className="embed-responsive embed-responsive-16by9" key={key}>
						<iframe src={streamLink} frameborder="0" scrolling="no" className="embed-responsive-item"></iframe>
					</div>
				</div>
			)
		}
	}

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					{ Object.keys(this.props.routeParams).map(this.renderStream.bind(this)) }	
				</div>
			</div>
		)
	}
};

export default App;