import {
	FETCHING_YOUTUBE_DATA,
	GET_YOUTUBE_CONTENT,
	GET_YOUTUBE_UPLOADS_PLAYLIST_ID,
	PLAY_YOUTUBE_VIDEO,

	FETCHING_VIMEO_DATA,
	GET_VIMEO_CONTENT,
	PLAY_VIMEO_VIDEO,

	SET_INSTAGRAM_AUTH_CODE
 } from "./actionTypes";

const axios = require('axios');
const youtubeApiKey = "AIzaSyBkh3wmLBwxvC1DfAepsbRn9heVgGV9ofs";
const vimeoAccessToken = "df1439e70c4a7401f9a1353043b7a57d";



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
	// dispatch(fetchYoutubeData(true));// if i call this here with dispatch instead of calling it normally in Youtube.jsx, i have 2 requests on the initial page load(it's most likely because this one uses redux-thunk's dispatch)

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
export const fetchYoutubeData = (value) /*=> dispatch*/ => {
	return {
		type: FETCHING_YOUTUBE_DATA, 
		payload: value
	}
};

export const playYoutubeVideo = (i) => {
	return {
		type: PLAY_YOUTUBE_VIDEO,
		payload: i
	}
};





export const fetchVimeoData = (value) /*=> dispatch*/ => {
	return {
		type: FETCHING_VIMEO_DATA,
		payload: value
	}
};

export const getVimeoContent = (next = '/users/millchannel/videos?page=1&per_page=5') => async(dispatch) => {
	await axios.get('https://api.vimeo.com' + next, {
		headers: {'Authorization': "bearer "+ vimeoAccessToken}
	})
	.then(function (response) {
		dispatch({
			type: GET_VIMEO_CONTENT, 
			payload: {data: response.data, fetchingData: false}
		});
	})
	.catch(function (error) {
		console.log(error);
	})
	.finally(function () {
	});
};

export const playVimeoVideo = (i) => {
	return {
		type: PLAY_VIMEO_VIDEO,
		payload: i
	}
};





export const setInstagramAuthCode = (code) => {
	return {
		type: SET_INSTAGRAM_AUTH_CODE,
		payload: code
	}
};