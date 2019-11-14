import {
	FETCHING_DATA,
	GET_YOUTUBE_CONTENT,
	GET_YOUTUBE_UPLOADS_PLAYLIST_ID,
	PLAY_YOUTUBE_VIDEO
 } from "../actionTypes.js";

const initialState = {
	fetchingData: false,
	youtube: {
		uploadsPlaylistId: null, 
		content: [], 
		nextPageToken: null
	},
	vimeo: {},
	instagram: {}
};

export default function(state = initialState, action) {
	switch (action.type) {
		case GET_YOUTUBE_UPLOADS_PLAYLIST_ID: {		  	
		  	return {
				...state,
				youtube: {...state.youtube, uploadsPlaylistId: action.payload}
		  	};
		}
		case GET_YOUTUBE_CONTENT: {
		  	return {
				...state,
				fetchingData: action.payload.fetchingData,
				youtube: {
					...state.youtube, 
					content: state.youtube.content.concat(action.payload.data.items),
					nextPageToken: action.payload.data.nextPageToken
				}
		  	};
		}	
		case FETCHING_DATA: {		  	
			return {
			  ...state,
			  fetchingData: action.payload
			};
	  	}
		case PLAY_YOUTUBE_VIDEO: {		  	
			const content = state.youtube.content;
			content[action.payload].clicked = true;
			
			return {
			  	...state,
			  	youtube: {
					...state.youtube,
					content: content
				}
			};
	  	}
		default:
			return state;
	  }
}