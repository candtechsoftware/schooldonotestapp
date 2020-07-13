import { combineReducers } from "redux";
import alert from "./alert";
import studentAuth from './studentAuth';

export default combineReducers({ alert, studentAuth });
