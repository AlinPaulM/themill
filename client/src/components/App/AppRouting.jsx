import React from 'react';
import App from './App.jsx';
import { connect } from "react-redux";
import { setInstagramAuthCode } from "../../redux/actions.js";
// import { Redirect } from 'react-router-dom';

class AppRouting extends React.Component {
	render(){
console.log(this.props);

		const instagramAppId = "566407840787639";
		const website = "https://localhost:8000/";

		if(this.props.instagram.authCode === null){
			const urlAuthCode = new URLSearchParams(this.props.qs).get('code');

			if(urlAuthCode === null){
				// authenticate the instagram user
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
				this.props.setInstagramAuthCode(urlAuthCode);
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

export default connect(mapStateToProps, {setInstagramAuthCode})(AppRouting);