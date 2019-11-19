import { combineReducers } from "redux";
import youtube from "./youtube";
import vimeo from "./vimeo";
import instagram from "./instagram";

export default combineReducers({ youtube, vimeo, instagram });
