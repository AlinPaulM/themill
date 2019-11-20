import {
	SET_INSTAGRAM_AUTH_DATA,
	FETCHING_INSTAGRAM_DATA,
	GET_INSTAGRAM_CONTENT,
	LOAD_INSTAGRAM_IMAGE,
	GET_INSTAGRAM_VIDEO_EMBED
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
		case LOAD_INSTAGRAM_IMAGE: {
			const content = state.content;
			content[action.payload].clicked = true;
			
			return {
			  	...state,
			  	content: content
			};
		}
		case GET_INSTAGRAM_VIDEO_EMBED: {
			const content = state.content;
			content[action.payload.i].clicked = true;
			content[action.payload.i].html = action.payload.html;

			return {
				...state,
				content: content
			};
	  	}
		default:
			return state;
	  }
}