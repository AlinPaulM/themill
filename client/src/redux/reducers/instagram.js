import {
	SET_INSTAGRAM_AUTH_DATA
 } from "../actionTypes.js";

const initialState = {
	authData: {
		token: null,
		userId: null
	}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_INSTAGRAM_AUTH_DATA: {
			console.log(action.payload);
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