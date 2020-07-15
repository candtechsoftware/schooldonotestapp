import { LOGIN_STUDENT_SUCCESS, LOGIN_ADMIN_SUCCESS,REGISTER_FAIL, REGISTER_SUCCES, SET_CURRENT_USER } from '../types';
import UserService from './user.service'
import { setAlert } from '../alert/alert.action';

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

export const loadStudent = () => async dispatch => {
  console.log('this')
  try {
  const response = await UserService.loadStudent();
  console.log("Response in the User Actions: ", response);
  dispatch({
    type: SET_CURRENT_USER,
    payload: response,
  }, [])
  } catch (err) {
    console.log('error in the user actions', err);
    dispatch(setAlert("Loading User Failed", 'danger', 4000));

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