(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{47:function(t,e,n){t.exports=n(91)},52:function(t,e,n){},88:function(t,e,n){},89:function(t,e,n){},91:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(22),i=n.n(o),c=n(7),u=n(8),s=n(11),l=n(9),p=n(12),d=(n(52),n(38)),f=n(10),h=n(15),m=n.n(h),y=n(21),g=n(69),b="AIzaSyBkh3wmLBwxvC1DfAepsbRn9heVgGV9ofs",v=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(y.a)(m.a.mark((function n(a){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(""!==e){n.next=5;break}return n.next=3,g.get("https://graph.instagram.com/me/media",{params:{fields:"id,caption,media_type,media_url,permalink,thumbnail_url,timestamp,username",access_token:t,limit:5}}).then((function(t){a({type:"GET_INSTAGRAM_CONTENT",payload:{content:t.data.data,next:t.data.paging.next,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 3:n.next=7;break;case 5:return n.next=7,g.get(e).then((function(t){a({type:"GET_INSTAGRAM_CONTENT",payload:{content:t.data.data,next:t.data.paging.next,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 7:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},O=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).loadMoreYoutubeData=function(){if(window.innerHeight+window.pageYOffset+500>=Math.max(document.body.offsetHeight,document.body.scrollHeight)){if(n.props.youtube.fetchingData)return;n.props.fetchYoutubeData(!0);var t=n.props.youtube.uploadsPlaylistId;void 0!==t&&n.props.getYoutubeContent(t,n.props.youtube.nextPageToken)}},n.state={videoIds:""},n.props.getYoutubeUploadsPlaylistId(),n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"videoOrThumbnail",value:function(t){var e=this,n=this.props.youtube.content,a=n[t].snippet.resourceId.videoId;return void 0===n[t].clicked?r.a.createElement("div",{"data-id":a,onClick:function(){return e.props.playYoutubeVideo(t)}},r.a.createElement("img",{src:n[t].snippet.thumbnails.high.url,alt:""}),r.a.createElement("div",{className:"play"})):r.a.createElement(d.a,{videoId:a,opts:{playerVars:{autoplay:1,origin:window.location.href}}})}},{key:"content",value:function(){var t=this.props.youtube.content;if(t.length){for(var e=[],n=0;n<t.length;n++){var a=new Date(t[n].snippet.publishedAt).toLocaleString("en-GB",{timeZone:"UTC"});e[n]=r.a.createElement("div",{key:n},r.a.createElement("p",{className:"ellipsis"},t[n].snippet.title),r.a.createElement("div",{className:"video-player"},this.videoOrThumbnail(n)),r.a.createElement("p",null,a),r.a.createElement("br",null))}return e}}},{key:"render",value:function(){return null===this.props.youtube.uploadsPlaylistId||this.props.youtube.content.length||this.props.getYoutubeContent(this.props.youtube.uploadsPlaylistId),window.addEventListener("scroll",this.loadMoreYoutubeData),r.a.createElement("div",{className:"column3"},this.content())}}]),e}(r.a.Component),E=Object(f.b)((function(t){return{youtube:t.youtube}}),{getYoutubeUploadsPlaylistId:function(t){return function(){var t=Object(y.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.get("https://www.googleapis.com/youtube/v3/channels",{params:{part:"snippet,contentDetails",forUsername:"millchannel",key:b}}).then((function(t){e({type:"GET_YOUTUBE_UPLOADS_PLAYLIST_ID",payload:t.data.items[0].contentDetails.relatedPlaylists.uploads})})).catch((function(t){console.log(t)})).finally((function(){}));case 2:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},getYoutubeContent:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(){var n=Object(y.a)(m.a.mark((function n(a){return m.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,g.get("https://www.googleapis.com/youtube/v3/playlistItems",{params:{part:"snippet",playlistId:t,key:b,pageToken:e}}).then((function(t){a({type:"GET_YOUTUBE_CONTENT",payload:{data:t.data,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 2:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},fetchYoutubeData:function(t){return{type:"FETCHING_YOUTUBE_DATA",payload:t}},playYoutubeVideo:function(t){return{type:"PLAY_YOUTUBE_VIDEO",payload:t}}})(O),_=n(42),D=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).loadMoreVimeoData=function(){if(null!==n.props.vimeo.next&&window.innerHeight+window.pageYOffset+500>=Math.max(document.body.offsetHeight,document.body.scrollHeight)){if(n.props.vimeo.fetchingData)return;n.props.fetchVimeoData(!0),n.props.getVimeoContent(n.props.vimeo.next)}},n.state={videoIds:""},n.props.getVimeoContent(),n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"videoOrThumbnail",value:function(t){var e=this,n=this.props.vimeo.content;return void 0===n[t].clicked?r.a.createElement("img",{onClick:function(){return e.props.playVimeoVideo(t)},src:n[t].pictures.sizes[3].link_with_play_button,alt:""}):r.a.createElement(_.a,{video:n[t].link,autoplay:!0})}},{key:"content",value:function(){var t=this.props.vimeo.content;if(t.length){for(var e=[],n=0;n<t.length;n++){var a=new Date(t[n].release_time).toLocaleString("en-GB",{timeZone:"UTC"});e[n]=r.a.createElement("div",{key:n},r.a.createElement("p",{className:"ellipsis"},t[n].name),r.a.createElement("div",{className:"video-player"},this.videoOrThumbnail(n)),r.a.createElement("p",null,a),r.a.createElement("br",null))}return e}}},{key:"render",value:function(){return window.addEventListener("scroll",this.loadMoreVimeoData),r.a.createElement("div",{className:"column3"},this.content())}}]),e}(r.a.Component),T=Object(f.b)((function(t){return{vimeo:t.vimeo}}),{getVimeoContent:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"/users/millchannel/videos?page=1&per_page=5";return function(){var e=Object(y.a)(m.a.mark((function e(n){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.get("https://api.vimeo.com"+t,{headers:{Authorization:"bearer df1439e70c4a7401f9a1353043b7a57d"}}).then((function(t){n({type:"GET_VIMEO_CONTENT",payload:{data:t.data,fetchingData:!1}})})).catch((function(t){console.log(t)})).finally((function(){}));case 2:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},fetchVimeoData:function(t){return{type:"FETCHING_VIMEO_DATA",payload:t}},playVimeoVideo:function(t){return{type:"PLAY_VIMEO_VIDEO",payload:t}}})(D),j=(n(88),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).loadMoreInstagramData=function(){if(null!==n.props.instagram.next&&window.innerHeight+window.pageYOffset+500>=Math.max(document.body.offsetHeight,document.body.scrollHeight)){if(n.props.instagram.fetchingData)return;n.props.fetchInstagramData(!0),n.props.getInstagramContent(n.props.instagram.authData.token,n.props.instagram.next)}},n.state={videoIds:""},n.props.getInstagramContent(n.props.instagram.authData.token),n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"videoOrThumbnail",value:function(t){var e=this.props.instagram.content;return"IMAGE"===e[t].media_type?r.a.createElement("img",{src:e[t].permalink+"media?size=l",alt:""}):"VIDEO"===e[t].media_type?void 0===e[t].clicked?r.a.createElement("div",null,r.a.createElement("img",{src:e[t].thumbnail_url,alt:""}),r.a.createElement("div",{className:"play"})):r.a.createElement("img",{src:e[t].thumbnail_url,alt:""}):void 0}},{key:"content",value:function(){var t=this.props.instagram.content;if(t.length){for(var e=[],n=0;n<t.length;n++){var a=new Date(t[n].timestamp).toLocaleString("en-GB",{timeZone:"UTC"});e[n]=r.a.createElement("div",{key:n},r.a.createElement("p",{className:"ellipsis"},t[n].caption),r.a.createElement("div",{className:"video-player"},this.videoOrThumbnail(n)),r.a.createElement("p",null,a),r.a.createElement("br",null))}return e}}},{key:"render",value:function(){return console.log(this.props),r.a.createElement("div",{className:"column3"},this.content())}}]),e}(r.a.Component)),w=Object(f.b)((function(t){return{instagram:t.instagram}}),{getInstagramContent:v,fetchInstagramData:function(t){return{type:"FETCHING_INSTAGRAM_DATA",payload:t}}})(j),I=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={input:""},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"updateInput",value:function(t){this.setState({input:t})}},{key:"render",value:function(){var t=this;return r.a.createElement("div",{className:"app"},r.a.createElement("input",{className:"search",type:"text",placeholder:"Search",onChange:function(e){return t.updateInput(e.target.value)}}),r.a.createElement(E,{search:this.state.input}),r.a.createElement(T,{search:this.state.input}),r.a.createElement(w,{search:this.state.input}))}}]),e}(r.a.Component),k=function(t){function e(){return Object(c.a)(this,e),Object(s.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(p.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){console.log(this.props);var t="https://localhost:8000/";if(null===this.props.instagram.authData.token){var e=new URLSearchParams(this.props.qs).get("code");if(null===e){var n="https://api.instagram.com/oauth/authorize?app_id=566407840787639&redirect_uri="+encodeURIComponent(t)+"&scope=user_profile,user_media&response_type=code";return window.location=n,null}return this.props.setInstagramAuthData("566407840787639","30f34771ff0f7a16b9390eac9a19436f",t,e),null}return r.a.createElement(I,null)}}]),e}(r.a.Component),A=Object(f.b)((function(t){return{instagram:t.instagram}}),{setInstagramAuthData:function(t,e,n,a){return function(r){var o=new FormData;o.set("app_id",t),o.set("app_secret",e),o.set("grant_type","authorization_code"),o.set("redirect_uri",n),o.set("code",a),g.post("https://api.instagram.com/oauth/access_token",o,{headers:{"Content-Type":"multipart/form-data"}}).then((function(t){r({type:"SET_INSTAGRAM_AUTH_DATA",payload:{token:t.data.access_token,userId:t.data.user_id}})})).catch((function(t){console.log(t)})).finally((function(){}))}},getInstagramContent:v})(k),P=n(16),N=n(18);function C(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?C(n,!0).forEach((function(e){Object(N.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):C(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var U={fetchingData:!1,uploadsPlaylistId:null,content:[],nextPageToken:null};function Y(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function G(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Y(n,!0).forEach((function(e){Object(N.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Y(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var V={fetchingData:!1,content:[],next:null};function S(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function M(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?S(n,!0).forEach((function(e){Object(N.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):S(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var H={authData:{token:null,userId:null},fetchingData:!1,content:[],next:null},L=Object(P.c)({youtube:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:U,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_YOUTUBE_DATA":return x({},t,{fetchingData:e.payload});case"GET_YOUTUBE_UPLOADS_PLAYLIST_ID":return x({},t,{uploadsPlaylistId:e.payload});case"GET_YOUTUBE_CONTENT":return x({},t,{fetchingData:e.payload.fetchingData,content:t.content.concat(e.payload.data.items),nextPageToken:e.payload.data.nextPageToken});case"PLAY_YOUTUBE_VIDEO":var n=t.content;return n[e.payload].clicked=!0,x({},t,{content:n});default:return t}},vimeo:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:V,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_VIMEO_DATA":return G({},t,{fetchingData:e.payload});case"GET_VIMEO_CONTENT":return G({},t,{fetchingData:e.payload.fetchingData,content:t.content.concat(e.payload.data.data),next:e.payload.data.paging.next});case"PLAY_VIMEO_VIDEO":var n=t.content;return n[e.payload].clicked=!0,G({},t,{content:n});default:return t}},instagram:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,e=arguments.length>1?arguments[1]:void 0;switch(e.type){case"FETCHING_INSTAGRAM_DATA":return M({},t,{fetchingData:e.payload});case"GET_INSTAGRAM_CONTENT":return M({},t,{fetchingData:e.payload.fetchingData,content:t.content.concat(e.payload.content),next:e.payload.next});case"SET_INSTAGRAM_AUTH_DATA":return M({},t,{authData:{token:e.payload.token,userId:e.payload.userId}});default:return t}}}),B=n(44),R=Object(P.d)(Object(P.a)(B.a)),F=Object(P.e)(L,void 0,R),z=(n(89),n(45)),Z=n(17);i.a.render(r.a.createElement(f.a,{store:F},r.a.createElement(z.a,null,r.a.createElement(Z.c,null,r.a.createElement(Z.a,{path:"/",render:function(t){return r.a.createElement(A,{qs:t.location.search})}})))),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.15efffef.chunk.js.map