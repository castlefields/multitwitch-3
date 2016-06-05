import React from 'react';
import { browserHistory } from 'react-router';

class StreamPicker extends React.Component {
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

	render() {
		return (
			<div className="container">
				<div className="row">
					<div className="col-sm-6 col-sm-offset-3">
						<form onSubmit={this.goToStreams.bind(this)}>
							<h2>Please Enter Streams names</h2>
							<div className="form-group">
								<label for="streamId1">Stream 1</label>
								<input type="text" className="form-control" id="streamId1" placeholder="Stream name 1" ref="streamId1" required/>
							</div>
							<div className="form-group">
								<label for="streamId2">Stream 2</label>
								<input type="text" className="form-control" id="streamId2" placeholder="Stream name 2" ref="streamId2" />
							</div>
							<div className="form-group">
								<label for="streamId3">Stream 3</label>
								<input type="text" className="form-control" id="streamId3" placeholder="Stream name 3" ref="streamId3" />
							</div>
							<div className="form-group">
								<label for="streamId4">Stream 4</label>
								<input type="text" className="form-control" id="streamId4" placeholder="Stream name 4" ref="streamId4" />
							</div>
							<button type="submit" className="btn btn-default">Submit</button>
						</form>
					</div>
				</div>
			</div>
		)
	}
};

export default StreamPicker;
