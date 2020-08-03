import { LOAD_SETTING, UPDATE_SETTING } from '../types';
import setAuthtoken from "../../utils/authHeader";
import AdminService from './admin.service';


export const loadSettings = () => async dispatch => {
  if (loadSettings.token) {
    setAuthtoken(loadSettings.token)
  }

  try {
    let response = await AdminService.getAllSettings();
    console.log('In actions ' , response);
    dispatch({ 
      type: LOAD_SETTING,
      payload: response
    });

  } catch(err) {
    console.log('In actions', err);
  }

}


export const updateSettings = (setting_id, data) => async dispatch => {
  if (localStorage.token){
    setAuthtoken(localStorage.token);
  }
  try{
    const response = AdminService.updateSetting();
    console.log('setting: ' ,response);
    dispatch({
      type: UPDATE_SETTING,
      payload: response
    })

  } catch (err){

  }
}