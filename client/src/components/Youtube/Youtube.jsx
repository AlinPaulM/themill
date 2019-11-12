import React from 'react';

class Youtube extends React.Component {
	search(){
		return this.props.content;
	}

	render(){
		return (
			<div className="youtube">
				{this.search()}
			</div>
		);
	}
}

export default Youtube;
