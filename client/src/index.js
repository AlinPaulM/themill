import React from 'react';
import ReactDOM from 'react-dom';
import AppRouting from './components/App/AppRouting.jsx';
import { Provider } from "react-redux";
import store from "./redux/store";
import './index.scss';
// import * as serviceWorker from './serviceWorker';
import { Redirect, BrowserRouter as Router, Switch, Route } from "react-router-dom";

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route 
					path="/"
					render={(props) => <AppRouting qs={props.location.search} />}
				/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);

/*
If you want your app to work offline and load faster, you can change
unregister() to register() below. Note this comes with some pitfalls.
Learn more about service workers: https://bit.ly/CRA-PWA
*/
// serviceWorker.unregister();