import {
	SET_INSTAGRAM_AUTH_DATA,
	FETCHING_INSTAGRAM_DATA,
	GET_INSTAGRAM_CONTENT
 } from "../actionTypes.js";

const initialState = {
	authData: {
		token: null,
		userId: null
	},
	fetchingData: false,
	content: [], 
	next: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCHING_INSTAGRAM_DATA: {
			return {
				...state,
				fetchingData: action.payload
			};
	  	}
		case GET_INSTAGRAM_CONTENT: {
			return {
				...state,
				fetchingData: action.payload.fetchingData,
				content: state.content.concat(action.payload.content),
				next: action.payload.next
			};
		}
		case SET_INSTAGRAM_AUTH_DATA: {
			return {
				...state,
				authData: {
					token: action.payload.token,
					userId: action.payload.userId
				}
			};
	  	}
		default:
			return state;
	  }
}