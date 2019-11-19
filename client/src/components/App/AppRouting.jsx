import React from 'react';
import App from './App.jsx';
import { connect } from "react-redux";
import { setInstagramAuthData } from "../../redux/actions.js";
// import { Redirect } from 'react-router-dom';

class AppRouting extends React.Component {
	render(){
console.log(this.props);

		const instagramAppId = "566407840787639";
		const instagramAppSecret = "30f34771ff0f7a16b9390eac9a19436f";
		const website = "https://localhost:8000/";

		if(this.props.instagram.authData.token === null){
			const authCode = new URLSearchParams(this.props.qs).get('code');

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
				this.props.setInstagramAuthData(instagramAppId, instagramAppSecret, website, authCode);
				
				// display loader until the state is updated w the token so the app can display instagram data
				return null;
			}
		}


		return <App />;
	}
}

const mapStateToProps = state => {
	return {
		instagram: state.instagram
	};
};

export default connect(mapStateToProps, {setInstagramAuthData})(AppRouting);