import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import alertReducer from './alert/alert.reducer';
import donationReducer from './donations/donation.reducer';
import sideBarReducer from './sidebar/sidebar.reducer';
import studentReducer from './students/student.reducer';
import schoolReducer from './schools/school.reducer';
import adminReducer from './admin/admin.reducer';
import {LOGOUT} from './types';

const appReducer = combineReducers(
  {
    user: userReducer, 
    admin:adminReducer,
    alert: alertReducer,
    donation: donationReducer,
    sidebar: sideBarReducer,
    students: studentReducer,
    schools: schoolReducer,
  });

const rootReducer =  (state, actions) => {
  if (actions.type === LOGOUT){
    localStorage.removeItem('token');
    state = undefined;
  }
  return appReducer(state, actions)
}

  export default rootReducer;