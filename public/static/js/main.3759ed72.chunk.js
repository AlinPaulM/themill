(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(t,e,n){},102:function(t,e,n){},103:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(21),i=n.n(o),c=n(8),l=n(9),s=n(12),u=n(10),p=n(13),d=(n(56),n(42)),m=n(11),f=n(7),h=n.n(f),y=n(19),g=n(73),v="AIzaSyBkh3wmLBwxvC1DfAepsbRn9heVgGV9ofs",b=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return function(){var n=Object(y.a)(h.a.mark((function n(a){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(!0!==e){n.next=5;break}return n.next=3,g.get("https://graph.instagram.com/me/media",{params:{fields:"id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username",access_token:t,limit:5}}).then((function(t){a({type:"GET_INSTAGRAM_CONTENT",payload:{content:t.data.data,next:t.data.paging.next,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 3:n.next=8;break;case 5:if(void 0===t){n.next=8;break}return n.next=8,g.get(t).then((function(t){a({type:"GET_INSTAGRAM_CONTENT",payload:{content:t.data.data,next:t.data.paging.next,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 8:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},O=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).loadMoreYoutubeData=function(){if(window.innerHeight+window.pageYOffset+500>=Math.max(document.body.offsetHeight,document.body.scrollHeight)){if(n.props.youtube.fetchingData)return;n.props.fetchYoutubeData(!0);var t=n.props.youtube.uploadsPlaylistId;void 0!==t&&n.props.getYoutubeContent(t,n.props.youtube.nextPageToken)}},n.state={videoIds:""},n.props.getYoutubeUploadsPlaylistId(),n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"videoOrThumbnail",value:function(t){var e=this,n=this.props.youtube.content,a=n[t].snippet.resourceId.videoId;return void 0===n[t].clicked?r.a.createElement("div",{"data-id":a,onClick:function(){return e.props.playYoutubeVideo(t)}},r.a.createElement("img",{src:n[t].snippet.thumbnails.high.url,alt:""}),r.a.createElement("div",{className:"play"})):r.a.createElement(d.a,{videoId:a,opts:{playerVars:{autoplay:1,origin:window.location.href}}})}},{key:"content",value:function(){var t=this.props.youtube.content;if(t.length){for(var e=[],n=0;n<t.length;n++){var a=new Date(t[n].snippet.publishedAt).toLocaleString("en-GB",{timeZone:"UTC"});e[n]=r.a.createElement("div",{key:n},r.a.createElement("p",{className:"ellipsis"},t[n].snippet.title),r.a.createElement("div",{className:"video-player"},this.videoOrThumbnail(n)),r.a.createElement("p",null,a),r.a.createElement("br",null))}return e}}},{key:"render",value:function(){return null===this.props.youtube.uploadsPlaylistId||this.props.youtube.content.length||this.props.getYoutubeContent(this.props.youtube.uploadsPlaylistId),window.addEventListener("scroll",this.loadMoreYoutubeData),r.a.createElement("div",{className:"column3"},this.content())}}]),e}(r.a.Component),E=Object(m.b)((function(t){return{youtube:t.youtube}}),{getYoutubeUploadsPlaylistId:function(t){return function(){var t=Object(y.a)(h.a.mark((function t(e){return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("https://www.googleapis.com/youtube/v3/channels",{params:{part:"snippet,contentDetails",forUsername:"millchannel",key:v}}).then((function(t){e({type:"GET_YOUTUBE_UPLOADS_PLAYLIST_ID",payload:t.data.items[0].contentDetails.relatedPlaylists.uploads})})).catch((function(t){console.log(t)})).finally((function(){}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getYoutubeContent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(y.a)(h.a.mark((function n(a){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:t,key:v,pageToken:e}}).then((function(t){a({type:"GET_YOUTUBE_CONTENT",payload:{data:t.data,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},fetchYoutubeData:function(t){return{type:"FETCHING_YOUTUBE_DATA",payload:t}},playYoutubeVideo:function(t){return{type:"PLAY_YOUTUBE_VIDEO",payload:t}}})(O),_=n(46),D=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).loadMoreVimeoData=function(){if(null!==n.props.vimeo.next&&window.innerHeight+window.pageYOffset+500>=Math.max(document.body.offsetHeight,document.body.scrollHeight)){if(n.props.vimeo.fetchingData)return;n.props.fetchVimeoData(!0),n.props.getVimeoContent(n.props.vimeo.next)}},n.state={videoIds:""},n.props.getVimeoContent(),n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"videoOrThumbnail",value:function(t){var e=this,n=this.props.vimeo.content;return void 0===n[t].clicked?r.a.createElement("img",{onClick:function(){return e.props.playVimeoVideo(t)},src:n[t].pictures.sizes[3].link_with_play_button,alt:""}):r.a.createElement(_.a,{video:n[t].link,autoplay:!0})}},{key:"content",value:function(){var t=this.props.vimeo.content;if(t.length){for(var e=[],n=0;n<t.length;n++){var a=new Date(t[n].release_time).toLocaleString("en-GB",{timeZone:"UTC"});e[n]=r.a.createElement("div",{key:n},r.a.createElement("p",{className:"ellipsis"},t[n].name),r.a.createElement("div",{className:"video-player"},this.videoOrThumbnail(n)),r.a.createElement("p",null,a),r.a.createElement("br",null))}return e}}},{key:"render",value:function(){return window.addEventListener("scroll",this.loadMoreVimeoData),r.a.createElement("div",{className:"column3"},this.content())}}]),e}(r.a.Component),T=Object(m.b)((function(t){return{vimeo:t.vimeo}}),{getVimeoContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/users/millchannel/videos?page=1&per_page=5";return function(){var e=Object(y.a)(h.a.mark((function e(n){return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("https://api.vimeo.com"+t,{headers:{Authorization:"bearer df1439e70c4a7401f9a1353043b7a57d"}}).then((function(t){n({type:"GET_VIMEO_CONTENT",payload:{data:t.data,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchVimeoData:function(t){return{type:"FETCHING_VIMEO_DATA",payload:t}},playVimeoVideo:function(t){return{type:"PLAY_VIMEO_VIDEO",payload:t}}})(D),I=n(48),w=n.n(I),j=(n(100),function(t){function e(t){var n;Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).loadMoreInstagramData=function(){if(null!==n.props.instagram.next&&window.innerHeight+window.pageYOffset+500>=Math.max(document.body.offsetHeight,document.body.scrollHeight)){if(n.props.instagram.fetchingData)return;n.props.fetchInstagramData(!0),n.props.getInstagramContent(n.props.instagram.next)}},n.state={modals:[]},n.props.getInstagramContent(n.props.instagram.authData.token,!0);var a=document.createElement("script");return a.src="https://platform.instagram.com/en_US/embeds.js",a.async=!0,document.body.appendChild(a),n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"openModal",value:function(t){var e=this.state.modals.slice();e[t]=!0,this.setState({modals:e})}},{key:"closeModal",value:function(t){var e=this.state.modals.slice();e[t]=!1,this.setState({modals:e})}},{key:"videoOrThumbnail",value:function(t){var e=this,n=this.props.instagram.content;if("IMAGE"===n[t].media_type)return void 0===n[t].clicked?r.a.createElement("img",{onClick:function(){return e.props.loadInstagramImage(t)},src:n[t].permalink+"media?size=l",alt:""}):r.a.createElement("div",null,r.a.createElement("img",{onClick:function(){return e.openModal(t)},src:n[t].permalink+"media?size=l",alt:""}),r.a.createElement(w.a,{isOpen:void 0===this.state.modals[t]||this.state.modals[t],onRequestClose:function(){return e.closeModal(t)},shouldCloseOnOverlayClick:!0},r.a.createElement("div",{className:"modalContent",onClick:function(){return e.closeModal(t)}},r.a.createElement("img",{src:n[t].media_url,alt:""}))));if("VIDEO"===n[t].media_type){var a=r.a.createElement("div",null,r.a.createElement("img",{src:n[t].thumbnail_url,alt:""}),r.a.createElement("div",{className:"play"}));return void 0===n[t].clicked?r.a.createElement("div",{onClick:function(){return e.props.loadInstagramVideo(n[t].permalink,t)}},a):r.a.createElement("video",{controls:!0,autoPlay:!0},r.a.createElement("source",{src:n[t].html,type:"video/mp4"}))}}},{key:"content",value:function(){var t=this.props.instagram.content;if(t.length){for(var e=[],n=0;n<t.length;n++){var a=new Date(t[n].timestamp).toLocaleString("en-GB",{timeZone:"UTC"});e[n]=r.a.createElement("div",{key:n},r.a.createElement("p",{className:"ellipsis"},t[n].caption),r.a.createElement("div",{className:"video-player"},this.videoOrThumbnail(n)),r.a.createElement("p",null,a),r.a.createElement("br",null))}return e}}},{key:"render",value:function(){return console.log(this),window.addEventListener("scroll",this.loadMoreInstagramData),r.a.createElement("div",{className:"column3"},this.content())}}]),e}(r.a.Component)),k=Object(m.b)((function(t){return{instagram:t.instagram}}),{getInstagramContent:b,fetchInstagramData:function(t){return{type:"FETCHING_INSTAGRAM_DATA",payload:t}},loadInstagramImage:function(t){return{type:"LOAD_INSTAGRAM_IMAGE",payload:t}},loadInstagramVideo:function(t,e){return function(){var n=Object(y.a)(h.a.mark((function n(a){return h.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get(t+"?__a=1").then((function(t){a({type:"GET_INSTAGRAM_VIDEO_EMBED",payload:{i:e,html:t.data.graphql.shortcode_media.video_url}})})).catch((function(t){console.log(t)})).finally((function(){window.instgrm.Embeds.process()}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}})(j),A=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(u.a)(e).call(this,t))).state={input:""},n}return Object(p.a)(e,t),Object(l.a)(e,[{key:"updateInput",value:function(t){this.setState({input:t})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"app"},r.a.createElement("input",{className:"search",type:"text",placeholder:"Search",onChange:function(e){return t.updateInput(e.target.value)}}),r.a.createElement(E,{search:this.state.input}),r.a.createElement(T,{search:this.state.input}),r.a.createElement(k,{search:this.state.input}))}}]),e}(r.a.Component),C=n(17),P=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(u.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(l.a)(e,[{key:"render",value:function(){var t="https://localhost:8000/",e=new URLSearchParams(this.props.qs).get("code");if(null===this.props.instagram.authData.token){if(null===e){var n="https://api.instagram.com/oauth/authorize?app_id=566407840787639&redirect_uri="+encodeURIComponent(t)+"&scope=user_profile,user_media&response_type=code";return window.location=n,null}return this.props.setInstagramAuthData("566407840787639","30f34771ff0f7a16b9390eac9a19436f",t,e),null}return null!==e?r.a.createElement(C.a,{to:"/"}):r.a.createElement(A,null)}}]),e}(r.a.Component),N=Object(m.b)((function(t){return{instagram:t.instagram}}),{setInstagramAuthData:function(t,e,n,a){return function(r){var o=new FormData;o.set("app_id",t),o.set("app_secret",e),o.set("grant_type","authorization_code"),o.set("redirect_uri",n),o.set("code",a),g.post("https://api.instagram.com/oauth/access_token",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){r({type:"SET_INSTAGRAM_AUTH_DATA",payload:{token:t.data.access_token,userId:t.data.user_id}})})).catch((function(t){console.log(t)})).finally((function(){}))}},getInstagramContent:b})(P),x=n(16),M=n(18);function G(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function S(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?G(n,!0).forEach((function(e){Object(M.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):G(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={fetchingData:!1,uploadsPlaylistId:null,content:[],nextPageToken:null};function U(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function Y(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?U(n,!0).forEach((function(e){Object(M.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):U(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var L={fetchingData:!1,content:[],next:null};function H(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function B(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?H(n,!0).forEach((function(e){Object(M.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):H(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var R={authData:{token:null,userId:null},fetchingData:!1,content:[],next:null},z=Object(x.c)({youtube:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_YOUTUBE_DATA":return S({},t,{fetchingData:e.payload});case"GET_YOUTUBE_UPLOADS_PLAYLIST_ID":return S({},t,{uploadsPlaylistId:e.payload});case"GET_YOUTUBE_CONTENT":return S({},t,{fetchingData:e.payload.fetchingData,content:t.content.concat(e.payload.data.items),nextPageToken:e.payload.data.nextPageToken});case"PLAY_YOUTUBE_VIDEO":var n=t.content;return n[e.payload].clicked=!0,S({},t,{content:n});default:return t}},vimeo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_VIMEO_DATA":return Y({},t,{fetchingData:e.payload});case"GET_VIMEO_CONTENT":return Y({},t,{fetchingData:e.payload.fetchingData,content:t.content.concat(e.payload.data.data),next:e.payload.data.paging.next});case"PLAY_VIMEO_VIDEO":var n=t.content;return n[e.payload].clicked=!0,Y({},t,{content:n});default:return t}},instagram:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_INSTAGRAM_DATA":return B({},t,{fetchingData:e.payload});case"GET_INSTAGRAM_CONTENT":return B({},t,{fetchingData:e.payload.fetchingData,content:t.content.concat(e.payload.content),next:e.payload.next});case"SET_INSTAGRAM_AUTH_DATA":return B({},t,{authData:{token:e.payload.token,userId:e.payload.userId}});case"LOAD_INSTAGRAM_IMAGE":var n=t.content;return n[e.payload].clicked=!0,B({},t,{content:n});case"GET_INSTAGRAM_VIDEO_EMBED":var a=t.content;return a[e.payload.i].clicked=!0,a[e.payload.i].html=e.payload.html,B({},t,{content:a});default:return t}}}),F=n(50),q=Object(x.d)(Object(x.a)(F.a)),Z=Object(x.e)(z,void 0,q),J=(n(102),n(27));i.a.render(r.a.createElement(m.a,{store:Z},r.a.createElement(J.a,null,r.a.createElement(C.d,null,r.a.createElement(C.b,{path:"/",render:function(t){return r.a.createElement(N,{qs:t.location.search})}})))),document.getElementById("root"))},51:function(t,e,n){t.exports=n(103)},56:function(t,e,n){}},[[51,1,2]]]);
//# sourceMappingURL=main.3759ed72.chunk.js.map