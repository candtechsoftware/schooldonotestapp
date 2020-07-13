import axios from 'axios';
import { setAlert } from './alert';
import { REGISTER_SUCCES, REGISTER_FAIL ,STUDENT_LOADED, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from './types';
import setAuthToken from '../utils/setAuthToken';
// Load User 
export const loadStudent = () => async dispatch => {
  if(localStorage.token) {
    setAuthToken(localStorage.token);
  }

  try {
    const res = await axios.get('http://localhost:5000/api/auth/login');
    dispatch({
      type: STUDENT_LOADED,
      payload: res.data
    })
  } catch (err) {
    dispatch({
      type: AUTH_ERROR
    })
  }
}

// Register Student
export const register = ({
  student_school_id,
  first_name,
  last_name,
  email,
  password,
  phone,
  shirt_size,
  grade,
  teacher,
  school_id,

}) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const body = JSON.stringify({
    student_school_id,
    first_name,
    last_name,
    email,
    password,
    phone,
    shirt_size,
    grade,
    teacher,
    school_id,
  });
  try {
    const res = await axios.post('http://localhost:5000/api/student/register', body, config);
    dispatch({
      type: REGISTER_SUCCES,
      payload: res.data,
  })
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(e => dispatch(setAlert(e.message, 'danger')))
    }

    dispatch({
      type: REGISTER_FAIL,
    })
    console.log(err);
  }
}


export const loginStudent = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const body = JSON.stringify({ email, password});


  try {
    const res = await axios.post('http://localhost:5000/api/student/login', body, config);
    dispatch({ 
      type: LOGIN_SUCCESS,
      payload: res.data
    });
    dispatch(loadStudent);
  } catch (err) {
    dispatch({ 
      type: LOGIN_FAIL,
    });
    console.log(err);

  }
}

export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
}