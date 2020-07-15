import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import alertReducer from './alert/alert.reducer';

export default combineReducers(
  {
    user: userReducer, 
    alert: alertReducer
  });
