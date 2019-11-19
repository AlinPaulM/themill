import React from 'react';
import { connect } from "react-redux";
import { getInstagramContent, fetchInstagramData } from "../../redux/actions.js";
import VimeoPlayer from '@u-wave/react-vimeo';
// import './Vimeo.scss';

class Instagram extends React.Component {
	constructor(props){
		super(props);
		this.state = { videoIds: "" };

		// get data for the initial page load
		this.props.getInstagramContent(this.props.instagram.authData.token);
	}

	videoOrThumbnail(i){
		const content = this.props.vimeo.content;

		if(content[i].clicked === undefined){
			return (
				<img 
					onClick={() => this.props.playVimeoVideo(i)}
					src={content[i].pictures.sizes[3].link_with_play_button} alt=""
				/>
			);
		}
		else{
			return <VimeoPlayer video={content[i].link} autoplay />;
		}
	}

	content(){
		const content = this.props.vimeo.content;
		if(!content.length) return;
		
		const arr = [];
		for(var i = 0; i < content.length; i++){
			const date = new Date(content[i].release_time);
			const formattedDate = date.toLocaleString('en-GB', { timeZone: 'UTC' });			

			arr[i] = (
				<div key={i}>
					<p className="ellipsis">{content[i].name}</p>
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

	loadMoreInstagramData = () => {
		if(this.props.instagram.next !== null){
			if ((window.innerHeight + window.pageYOffset) + 500 >= Math.max(document.body.offsetHeight, document.body.scrollHeight)) {
				if(this.props.instagram.fetchingData) return;
				this.props.fetchInstagramData(true);
				
				this.props.getInstagramContent(this.props.instagram.authData.token, this.props.instagram.next);
			}
		};
	}


	render(){
console.log(this.props);

		// window.addEventListener('scroll', this.loadMoreInstagramData);

		return (
			<div className="instagram">
				{/* {this.content()} */}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		instagram: state.instagram
	};
};
export default connect(mapStateToProps, {
	getInstagramContent, 
	fetchInstagramData
})(Instagram);
