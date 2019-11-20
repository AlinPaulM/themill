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
				<input 
					className="search" 
					type="text" 
					placeholder="Search(to be implemented)" 
					onChange={e => this.updateInput(e.target.value)}
				/>
				<Youtube search={this.state.input} />
				<Vimeo search={this.state.input} />
				<Instagram search={this.state.input} />
			</div>
		);
	}
}

export default App;
