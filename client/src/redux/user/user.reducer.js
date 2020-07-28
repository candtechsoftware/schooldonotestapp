import { SET_CURRENT_USER, LOGIN_STUDENT_SUCCESS, LOGIN_ADMIN_SUCCESS,REGISTER_SUCCES, REGISTER_FAIL, AUTH_ERROR, LOGOUT } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  currentUser: null,
  isAdmin: false,
  isAuthenticated: false,
  loading: true,
}

const userReducer = (state= initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload.user, // Gets User from json response 
        isAdmin: action.payload.isAdmin || false,
        isAuthenticated: action.payload.isAuthenticated || false,
        loading: false 
      };
    case LOGIN_STUDENT_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        currentUser: action.payload.user,
        isAdmin: action.payload.isAdmin,
        isAuthenticated: action.payload.isAuthenticated,
        loading: false 
      }

    case LOGIN_ADMIN_SUCCESS:
        return {
          ...state,
          token: action.payload.token,
          currentUser: action.payload.user,
          isAdmin: action.payload.isAdmin,
          isAuthenticated: action.payload.isAuthenticated,
          loading: false 
        }
    case REGISTER_SUCCES:
      return {
        ...state,
        isRegistered: true,
        loading: false 
      }
      case LOGOUT:
      case AUTH_ERROR:
      case REGISTER_FAIL:
        return initialState;
    default:
      return state; 
  }
}

export default userReducer; 