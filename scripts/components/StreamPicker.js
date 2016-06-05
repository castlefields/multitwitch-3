import React from 'react';
import { browserHistory } from 'react-router';

class StreamPicker extends React.Component {

	constructor() {
		super();

		this.state = {
			streams: {
				stream0: ''
			}
		};
	}

	goToStreams(event) {
		event.preventDefault();
		let streamIds = [];
		Object.keys(this.refs).map( (key)=> {
			let value = this.refs[key].value;
			if (value) {
				streamIds.push(value);
			}
		});
		browserHistory.push('/' + streamIds.join('/'));
	}

	addStream() {
		var timestamp = (new Date()).getTime();
		// Update
		this.state.streams['stream' + timestamp] = '';
		// Set
		this.setState({ streams: this.state.streams });
	}

	removeStream(key) {
		// Update
		delete this.state.streams[key];
		// Set
		this.setState({ streams: this.state.streams });
	}

	renderStreamInput(key){
		return (
			<div className="form-group" key={key}>
				<label for={key}>Stream</label>
				<input type="text" className="form-control" id={key} ref={key} required/>
			    <button type="button" className="btn btn-danger" 
			    	onClick={this.removeStream.bind(this, key)}>
			    	Remove Stream
			    </button>
			</div>
		)
	}

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<form onSubmit={this.goToStreams.bind(this)}>
							<h2>Please Enter Stream name</h2>
							{Object.keys(this.state.streams).map(this.renderStreamInput.bind(this))}
							<button type="button" className="btn btn-primary" onClick={this.addStream.bind(this)}>Add Stream</button>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
};

export default StreamPicker;
