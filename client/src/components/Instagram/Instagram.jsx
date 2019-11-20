import React from 'react';
import { connect } from "react-redux";
import { getInstagramContent, fetchInstagramData, loadInstagramImage, loadInstagramVideo } from "../../redux/actions.js";
import Modal from 'react-modal';
import './Instagram.scss';

class Instagram extends React.Component {
	constructor(props){
		super(props);
		this.state = { modals: [] };

		// get data for the initial page load
		this.props.getInstagramContent(this.props.instagram.authData.token, true);

		const script = document.createElement("script");
		script.src = "https://platform.instagram.com/en_US/embeds.js";
		script.async = true;
		document.body.appendChild(script);
	}

	openModal(i) {
		const modals = this.state.modals.slice();
		modals[i] = true;
		this.setState({ modals: modals });
	}

	closeModal(i) {
		const modals = this.state.modals.slice();
		modals[i] = false;
		this.setState({ modals: modals });
	}

	videoOrThumbnail(i){
		const content = this.props.instagram.content;

		if(content[i].media_type === "IMAGE"){
			if(content[i].clicked === undefined){
				return (
					<img
						onClick={() => this.props.loadInstagramImage(i)}
						src={content[i].permalink + "media?size=l"} 
						alt=""
					/>
				);
			}
			else{
				return (
					<div>
						<img
							onClick={() => this.openModal(i)}
							src={content[i].permalink + "media?size=l"}
							alt=""
						/>
						<Modal
							isOpen={this.state.modals[i] === undefined ? true : this.state.modals[i]}
							onRequestClose={() => this.closeModal(i)}
							shouldCloseOnOverlayClick={true}						
						>
							<div 
								className="modalContent"
								onClick={() => this.closeModal(i)}
							>
								<img src={content[i].media_url} alt="" />
							</div>
						</Modal>
					</div>
				);
			}

		}
		else if(content[i].media_type === "VIDEO"){
			const innerElem = (
				<div>
					<img src={content[i].thumbnail_url} alt="" />
					<div className="play"></div>
				</div>
			);
			
			if(content[i].clicked === undefined){
				return (
					<div onClick={() => this.props.loadInstagramVideo(content[i].permalink, i)}>
						{innerElem}
					</div>
				);
			}
			else{
				return (
					<video controls autoPlay>
						<source src={content[i].html} type="video/mp4" />
					</video>
				);
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
console.log(this);

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
	loadInstagramImage,
	loadInstagramVideo
})(Instagram);
