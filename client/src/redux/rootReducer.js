import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import alertReducer from './alert/alert.reducer';
import donationReducer from './donations/donation.reducer';
import sideBarReducer from './sidebar/sidebar.reducer';
export default combineReducers(
  {
    user: userReducer, 
    alert: alertReducer,
    donation: donationReducer,
    sidebar: sideBarReducer,
  });
