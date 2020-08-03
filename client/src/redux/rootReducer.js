import { combineReducers } from 'redux';
import userReducer from './user/user.reducer';
import alertReducer from './alert/alert.reducer';
import donationReducer from './donations/donation.reducer';
import sideBarReducer from './sidebar/sidebar.reducer';
import studentReducer from './students/student.reducer';
import schoolReducer from './schools/school.reducer';
import adminReducer from './admin/admin.reducer';


const rootReducer = combineReducers(
  {
    user: userReducer, 
    admin:adminReducer,
    alert: alertReducer,
    donation: donationReducer,
    sidebar: sideBarReducer,
    students: studentReducer,
    schools: schoolReducer,
  });


  export default rootReducer;