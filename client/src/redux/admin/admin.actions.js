import { LOAD_SETTING, UPDATE_SETTING, DELETE_ADMIN, GET_ALL_ADMINS } from '../types';
import setAuthtoken from "../../utils/authHeader";
import AdminService from './admin.service';


export const loadSettings = () => async dispatch => {
  if (loadSettings.token) {
    setAuthtoken(loadSettings.token)
  }

  try {
    let response = await AdminService.getAllSettings();
    console.log('in settigns, ', response);
    dispatch({ 
      type: LOAD_SETTING,
      payload: response
    });

  } catch(err) {
    console.error('In actions', err);
  }

}


export const updateSettings = (setting_id, data) => async dispatch => {
  if (localStorage.token){
    setAuthtoken(localStorage.token);
  }
  try{
    const response = AdminService.updateSetting(setting_id, data);
    const newSettings = {
      id: setting_id,
      setting: "fee",
      value: data.value,
    };
    if (!response) console.log('No response: ', response);
    dispatch({
      type: UPDATE_SETTING,
      payload: newSettings
    })

  } catch (err){
    console.error(err);
  }
}


export const getAllAdmins = () => async dispatch => {
  try {
    const response = await AdminService.getAllAdmins();

    dispatch({
      type: GET_ALL_ADMINS,
      payload: response
    })
  } catch(err) { 
    console.error(err);
  }

}


export const archiveAdmin = id => async dispatch => {
  try {
    const response = await AdminService.archiveAdmin(id);
    dispatch({
      type: DELETE_ADMIN,
      payload: id
    })
    if (!response) throw new Error(`Failed to archive admin ${response}`);
  } catch (err) {
    console.error('error in service: ', err) ;
  }

}