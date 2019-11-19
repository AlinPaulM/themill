import {
	SET_INSTAGRAM_AUTH_CODE
 } from "../actionTypes.js";

const initialState = {
	authCode: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case SET_INSTAGRAM_AUTH_CODE: {
			return {
				...state,
				authCode: action.payload
			};
	  	}
		default:
			return state;
	  }
}