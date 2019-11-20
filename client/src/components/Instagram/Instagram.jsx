import React from 'react';
import { connect } from "react-redux";
import { getInstagramContent, fetchInstagramData, playInstagramVideo } from "../../redux/actions.js";
import './Instagram.scss';

class Instagram extends React.Component {
	constructor(props){
		super(props);
		this.state = { videoIds: "" };

		// get data for the initial page load
		this.props.getInstagramContent(this.props.instagram.authData.token, true);

		const script = document.createElement("script");
		script.src = "https://platform.instagram.com/en_US/embeds.js";
		script.async = true;
		document.body.appendChild(script);
	}

	videoOrThumbnail(i){
		const content = this.props.instagram.content;

		if(content[i].media_type === "IMAGE"){
			return <img src={content[i].permalink + "media?size=l"} alt="" />;
		}
		else if(content[i].media_type === "VIDEO"){
			if(content[i].clicked === undefined){
				return (
					<div>
						<img
							onClick={() => this.props.playInstagramVideo(content[i].permalink, i)}
							src={content[i].thumbnail_url} alt="" />
						<div className="play"></div>
					</div>
				);
			}
			else{
				return <div dangerouslySetInnerHTML={{__html: content[i].html}} />;
			}
		}
	}

	content(){
		const content = this.props.instagram.content;
		if(!content.length) return;
		
		const arr = [];
		for(var i = 0; i < content.length; i++){
			const date = new Date(content[i].timestamp);
			const formattedDate = date.toLocaleString('en-GB', { timeZone: 'UTC' });			

			arr[i] = (
				<div key={i}>
					<p className="ellipsis">{content[i].caption}</p>
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
				
				this.props.getInstagramContent(this.props.instagram.next);
			}
		};
	}


	render(){
console.log(this.props);

		window.addEventListener('scroll', this.loadMoreInstagramData);

		return (
			<div className="column3">
				{this.content()}
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
	fetchInstagramData,
	playInstagramVideo
})(Instagram);
