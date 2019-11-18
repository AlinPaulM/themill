import {
	FETCHING_VIMEO_DATA,
	GET_VIMEO_CONTENT,
	PLAY_VIMEO_VIDEO
 } from "../actionTypes.js";

const initialState = {
	fetchingData: false,
	content: [], 
	next: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCHING_VIMEO_DATA: {
			return {
				...state,
				fetchingData: action.payload		  
			};
	  	}
		case GET_VIMEO_CONTENT: {
			return {
				...state,
				fetchingData: action.payload.fetchingData,
				content: state.content.concat(action.payload.data.data),
				next: action.payload.data.paging.next
			};
		}
		case PLAY_VIMEO_VIDEO: {
			const content = state.content;
			content[action.payload].clicked = true;
			
			return {
			  	...state,
			  	content: content
			};
		}
		default:
			return state;
	  }
}