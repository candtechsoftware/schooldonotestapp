import { LOGIN_STUDENT_SUCCESS, LOGIN_ADMIN_SUCCESS,REGISTER_FAIL, REGISTER_SUCCES, SET_CURRENT_USER, AUTH_ERROR, LOGOUT } from '../types';
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
  console.log(user);
  if(user){
    dispatch({
      type: REGISTER_SUCCES,
      payload: user
    });
    console.log('non error:', message);
  } else {
    console.log(message);
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
      console.log(user);
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
    console.log('error in register admin: ', err);
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
        console.log('error in the user actions', err);
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