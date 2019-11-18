import {
	FETCHING_YOUTUBE_DATA,
	GET_YOUTUBE_CONTENT,
	GET_YOUTUBE_UPLOADS_PLAYLIST_ID,
	PLAY_YOUTUBE_VIDEO
 } from "../actionTypes.js";

const initialState = {
	fetchingData: false,
	uploadsPlaylistId: null, 
	content: [], 
	nextPageToken: null
};

export default function(state = initialState, action) {
	switch (action.type) {
		case FETCHING_YOUTUBE_DATA: {
			return {
				...state,
				fetchingData: action.payload
			};
	  	}
		case GET_YOUTUBE_UPLOADS_PLAYLIST_ID: {
		  	return {
				...state,
				uploadsPlaylistId: action.payload
		  	};
		}
		case GET_YOUTUBE_CONTENT: {
		  	return {
				...state, 
				fetchingData: action.payload.fetchingData,
				content: state.content.concat(action.payload.data.items),
				nextPageToken: action.payload.data.nextPageToken
		  	};
		}
		case PLAY_YOUTUBE_VIDEO: {
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