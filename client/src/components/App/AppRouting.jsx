import React from 'react';
import App from './App.jsx';
import { connect } from "react-redux";
import { setInstagramAuthData, getInstagramContent } from "../../redux/actions.js";
import { Redirect } from 'react-router-dom';

class AppRouting extends React.Component {
	render(){
		const instagramAppId = "566407840787639";
		const instagramAppSecret = "30f34771ff0f7a16b9390eac9a19436f";
		const website = "https://localhost:8000/";

		const authCode = new URLSearchParams(this.props.qs).get('code');
		if(this.props.instagram.authData.token === null){
			if(authCode === null){
				// step 1: authenticate the instagram user & receive authorization to access his data
				const authInstagramUser = 
					"https://api.instagram.com/oauth/authorize?" +
					"app_id=" + instagramAppId +
					"&redirect_uri=" + encodeURIComponent(website) +
					"&scope=user_profile,user_media" +
					"&response_type=code";				
				
				window.location = authInstagramUser;

				return null;
			}
			else{
				// step 2: getting the instagram auth data(token and the user_id)
				this.props.setInstagramAuthData(instagramAppId, instagramAppSecret, website, authCode);
				
				return null;				
			}
		}
		else{
			if(authCode !== null) return <Redirect to="/" />;
			else return <App />;
		}
	}
}

const mapStateToProps = state => {
	return {
		instagram: state.instagram
	};
};

export default connect(mapStateToProps, {setInstagramAuthData, getInstagramContent})(AppRouting);