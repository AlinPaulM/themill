import React from 'react';
import './App.scss';
import Youtube from '../Youtube/Youtube.jsx';
import Vimeo from '../Vimeo/Vimeo.jsx';
import Instagram from '../Instagram/Instagram.jsx';

class App extends React.Component {
	constructor(props){
		super(props);
		this.state = {input: ""};
	}

	updateInput(input) {
		this.setState({input});
	}

	render(){
		return (
			<div className="app">
				<input type="text" placeholder="Search" onChange={e => this.updateInput(e.target.value)} />
				<Youtube content={this.state.input} />
				<Vimeo content={this.state.input} />
				<Instagram content={this.state.input} />
			</div>
		);
	}
}

export default App;
