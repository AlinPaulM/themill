import React from 'react';
import YouTube from 'react-youtube';
import { connect } from "react-redux";
import { getYoutubeUploadsPlaylistId, getYoutubeContent, fetchingDataFct, playYoutubeVideo } from "../../redux/actions.js";
import './Youtube.scss';

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
				<div className="youtube-player">
					<div
						data-id={videoId}
						onClick={() => this.props.playYoutubeVideo(i)}
					>
						<img src={content[i].snippet.thumbnails.high.url} />
						<div className="play"></div>
					</div>
				</div>
			);
		}
		else return (
			<div className="youtube-player">
				<YouTube
					videoId={videoId}
					opts={{
						playerVars: { // https://developers.google.com/youtube/player_parameters
							autoplay: 1
						}
					}}
				/>
			</div>
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
					<p>{content[i].snippet.title}</p>					
					{this.videoOrThumbnail(i)}
					<p>{formattedDate}</p>
				</div>
			);
		}

		return arr;
	}

	loadMoreData(){		
		window.onscroll = (e) => {			
			if ((window.innerHeight + window.pageYOffset) + 500 >= document.body.offsetHeight) {
				if(this.props.fetchingData) return;
				this.props.fetchingDataFct(true);
				
console.log("this.props.fetchingData");
				const uploadsPlaylistId = this.props.youtube.uploadsPlaylistId;
				if(uploadsPlaylistId !== undefined)					
					this.props.getYoutubeContent(uploadsPlaylistId, this.props.youtube.nextPageToken);
			}
		};
	}


	render(){
console.log(this.props);
		
		// get data for the initial page load
		if(this.props.youtube.uploadsPlaylistId !== null && !this.props.youtube.content.length)
			this.props.getYoutubeContent(this.props.youtube.uploadsPlaylistId);

		this.loadMoreData();

		return (
			<div className="youtube">				
				{this.content()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		fetchingData: state.fetchingData,
		youtube: state.youtube
	};
};
export default connect(mapStateToProps, {
	getYoutubeUploadsPlaylistId, 
	getYoutubeContent, 
	fetchingDataFct,
	playYoutubeVideo
})(Youtube);
