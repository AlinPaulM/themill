import React from 'react';
import { connect } from "react-redux";
import { getVimeoContent, fetchVimeoData, playVimeoVideo } from "../../redux/actions.js";
import VimeoPlayer from '@u-wave/react-vimeo';
import './Vimeo.scss';

class Vimeo extends React.Component {
	constructor(props){
		super(props);
		this.state = { videoIds: "" };

		// get data for the initial page load
		this.props.getVimeoContent();
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

	loadMoreVimeoData = () => {
		if(this.props.vimeo.next !== null){
			if ((window.innerHeight + window.pageYOffset) + 500 >= Math.max(document.body.offsetHeight, document.body.scrollHeight)) {
				if(this.props.vimeo.fetchingData) return;
				this.props.fetchVimeoData(true);
				
				this.props.getVimeoContent(this.props.vimeo.next);
			}
		};
	}


	render(){
		window.addEventListener('scroll', this.loadMoreVimeoData);

		return (
			<div className="vimeo">
				{this.content()}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		vimeo: state.vimeo
	};
};
export default connect(mapStateToProps, {
	getVimeoContent, 
	fetchVimeoData,
	playVimeoVideo
})(Vimeo);
