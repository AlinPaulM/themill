import React from 'react';
import YouTube from 'react-youtube';
import { connect } from "react-redux";
import { getYoutubeUploadsPlaylistId, getYoutubeContent, fetchYoutubeData, playYoutubeVideo } from "../../redux/actions.js";

class Youtube extends React.Component {
	constructor(props){
		super(props);
		this.state = { videoIds: "" };
		this.props.getYoutubeUploadsPlaylistId();
	}

	videoOrThumbnail(i){
		const content = this.props.youtube.content;
		const videoId = content[i].snippet.resourceId.videoId;

		if(content[i].clicked === undefined){
			return (				
				<div
					data-id={videoId}
					onClick={() => this.props.playYoutubeVideo(i)}
				>
					<img src={content[i].snippet.thumbnails.high.url} alt="" />
					<div className="play"></div>
				</div>				
			);
		}
		else return (
			<YouTube
				videoId={videoId}
				opts={{
					playerVars: { // https://developers.google.com/youtube/player_parameters
						autoplay: 1,
						origin: window.location.href
					}
				}}
			/>
		);
	}

	content(){
		const content = this.props.youtube.content;
		if(!content.length) return;
		
		const arr = [];
		for(var i = 0; i < content.length; i++){
			const date = new Date(content[i].snippet.publishedAt);
			const formattedDate = date.toLocaleString('en-GB', { timeZone: 'UTC' });			

			arr[i] = (
				<div key={i}>
					<p className="ellipsis">{content[i].snippet.title}</p>
					<div className="video-player">
						{this.videoOrThumbnail(i)}
					</div>
					<p>{formattedDate}</p>
					<br />
				</div>
			);
		}

		return arr;
	}

	loadMoreYoutubeData = () => {
		if ((window.innerHeight + window.pageYOffset) + 500 >= Math.max(document.body.offsetHeight, document.body.scrollHeight)) {
			if(this.props.youtube.fetchingData) return;
			this.props.fetchYoutubeData(true);

// console.log("this.props.youtube.fetchingData");
			const uploadsPlaylistId = this.props.youtube.uploadsPlaylistId;
			if(uploadsPlaylistId !== undefined)					
				this.props.getYoutubeContent(uploadsPlaylistId, this.props.youtube.nextPageToken);
		}
	}


	render(){
// console.log(this.props);
		
		// get data for the initial page load
		if(this.props.youtube.uploadsPlaylistId !== null && !this.props.youtube.content.length)
			this.props.getYoutubeContent(this.props.youtube.uploadsPlaylistId);

		window.addEventListener('scroll', this.loadMoreYoutubeData);

		return (
			<div className="column3">	
				{this.content()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		youtube: state.youtube
	};
};
export default connect(mapStateToProps, {
	getYoutubeUploadsPlaylistId, 
	getYoutubeContent, 
	fetchYoutubeData,
	playYoutubeVideo
})(Youtube);
