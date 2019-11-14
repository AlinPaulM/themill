import {
	FETCHING_DATA,
	GET_YOUTUBE_CONTENT,
	GET_YOUTUBE_UPLOADS_PLAYLIST_ID,
	PLAY_YOUTUBE_VIDEO
 } from "./actionTypes";

const axios = require('axios');
const youtubeApiKey = "AIzaSyBkh3wmLBwxvC1DfAepsbRn9heVgGV9ofs";

export const getYoutubeUploadsPlaylistId = (content) => async(dispatch) => {
	await axios.get('https://www.googleapis.com/youtube/v3/channels', {
		params: {
			part: 'snippet,contentDetails',
			forUsername: 'millchannel',
			key: youtubeApiKey
		}
	})
	.then(function (response) {
		dispatch({ 
			type: GET_YOUTUBE_UPLOADS_PLAYLIST_ID, 
			payload: response.data.items[0].contentDetails.relatedPlaylists.uploads
		});
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(function () {
	});
};

export const getYoutubeContent = (uploadsPlaylistId, pageToken = '') => async(dispatch) => {
	// dispatch(fetchingDataFct(true));// if i call this here with dispatch instead of calling it normally in Youtube.jsx, i have 2 requests on the initial page load(it's most likely because this one uses redux-thunk's dispatch)

	await axios.get('https://www.googleapis.com/youtube/v3/playlistItems', {
		params: {
			part: 'snippet',
			playlistId: uploadsPlaylistId,
			key: youtubeApiKey,
			pageToken: pageToken
		}
	})
	.then(function (response) {
		dispatch({
			type: GET_YOUTUBE_CONTENT, 
			payload: {data: response.data, fetchingData: false}
		});
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(function () {
	});
};

// NOTE: be VERY careful when you use dispatch and when not - if i use dispatch here, getYoutubeContent() gets executed multiple times!!!!
export const fetchingDataFct = (value) /*=> dispatch*/ => {
	return {
		type: FETCHING_DATA, 
		payload: value
	}
};

export const playYoutubeVideo = (i) => {
	return {
		type: PLAY_YOUTUBE_VIDEO,
		payload: i
	}
};