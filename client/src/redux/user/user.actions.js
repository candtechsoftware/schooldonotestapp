import { LOGIN_STUDENT_SUCCESS, LOGIN_ADMIN_SUCCESS,REGISTER_FAIL, REGISTER_SUCCES, SET_CURRENT_USER, AUTH_ERROR, LOGOUT, RESET_LINK, RESET_PASSWORD } from '../types';
import UserService from './user.service'
import { setAlert } from '../alert/alert.action';
import setAuthtoken from '../../utils/authHeader';

export const loginStudent = (email, password) => async dispatch => {
  const user = await UserService.loginStudent(email, password);
  if (user){
  dispatch({
    type: LOGIN_STUDENT_SUCCESS,
    payload: user
  });
  } else {
    dispatch(setAlert("Login Failed", 'danger', 4000));

  }
}

export const registerStudent = formData => async dispatch => {
  const response = await UserService.registerStudent(formData);
  const user = response.user;
  const message = response.message;
  if(user){
    dispatch({
      type: REGISTER_SUCCES,
      payload: user
    });
    console.log('non error:', message);
  } else {
    dispatch({
      type: REGISTER_FAIL,
    })
    dispatch(setAlert("Registration Failed", 'danger', 4000));
  }
}

export const registerAdmin = formData => async dispatch => {
  try {
      const response = await UserService.registerAdmin(formData);
      const user = response.user;
      const message = response.message;
      if (user){
        dispatch({
          type: REGISTER_SUCCES,
          payload: user,
        });
      } else {
        dispatch({
          type: REGISTER_FAIL,
        })
        dispatch(setAlert(message, 'danger', 2000))
      }

  } catch (err) {
    console.error('error in register admin: ', err);
  }

}

export const loadStudent = () => async dispatch => {
  if (localStorage.token){
    setAuthtoken(localStorage.token);
    try {
      
      let response = await UserService.loadStudent();
      if (response.status !==  201) {
          response = await UserService.loadAdmin();

      }
      dispatch({
        type: SET_CURRENT_USER,
        payload: response,
      }, [])
      } catch (err) {
        console.error('error in the user actions', err);
        dispatch({
          type: AUTH_ERROR
        })
    
      }

  }
}

export const loginAdmin = (email, password) => async dispatch => {

  try{
  const user = await UserService.loginAdmin(email, password);
  if (user) {
  dispatch({
    type: LOGIN_ADMIN_SUCCESS,
    payload: user
   });
    } else {
    dispatch(setAlert("Login Failed", 'danger', 4000));
  }
  } catch (err) {
    console.error(err);
  }

}

export const logout = () => async dispatch => {
  localStorage.removeItem('token');
  dispatch({type: LOGOUT})
}

export const sendResetLink = (email) => async dispatch => {
  try {
    const response = await UserService.sendResetLink(email);
    if (!response){
      dispatch({
        type: AUTH_ERROR,
        payload: response,
      })
    }else {
    dispatch({
      type: RESET_LINK,
      payload: response,
    })
  }
  } catch (err) {
    console.error('In actions: ' , err)
  }
}

export const resetPassword = (token, password) => async dispatch => {
  console.log('I am being called ');
  try{
    const resposne = await UserService.resetPassword(token, password); 
    dispatch({
      type: RESET_PASSWORD,
      payload: resposne, 
    })
  } catch(err) {
    console.error('Error in actions: ', err);
  }

}

export const clearState = () => async dispatch => {
    console.log('in actions')
    dispatch({ 
      type: LOGOUT,
    })
}

