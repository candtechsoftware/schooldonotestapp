import { REGISTER_SUCCES, REGISTER_FAIL, STUDENT_LOADED, AUTH_ERROR,LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT } from '../actions/types';

const initialState = {
  token: localStorage.getItem('token'),
  success: false,
  loading: true,
  isLoggedInStudent: false, 
  registerComplete: false,
  student: null,
}

export default function(state = initialState, action) {
  const { type, payload } = action;
  switch (type) {

    case STUDENT_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        isLoggedInStudent: true, 

        student: payload,
      }

    case REGISTER_SUCCES:
      return {
        ...state,
        success: true,
        registerComplete: true,
        loading: false,
      }
    case LOGIN_SUCCESS:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        success: true,
        isLoggedInStudent: true, 
        loading: false,
      }
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem('token');
      return {
        ...state,
        token:null,
        success: false,
        loading: false,
      } 
    
    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedInStudent: false,
        student: null,
      }

    default:
        return state;
  }

}