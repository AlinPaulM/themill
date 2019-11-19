import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducers";
import thunk from 'redux-thunk';

const composedEnhancers = compose(
	applyMiddleware(thunk)
	// ,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )

export default createStore(
	rootReducer,
	/* preloadedState, */ undefined,
	composedEnhancers
);