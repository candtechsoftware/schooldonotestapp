import { SET_CURRENT_USER, LOGIN_STUDENT_SUCCESS, LOGIN_ADMIN_SUCCESS,REGISTER_SUCCES, REGISTER_FAIL,  } from '../types';

const initialState = {
  token: localStorage.getItem('token'),
  currentUser: null,
  isAdmin: false,
  isAuthenticated: false,
}

const userReducer = (state= initialState, action) => {
  switch(action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUser: action.payload,
      };
    case LOGIN_STUDENT_SUCCESS:
      return {
        ...state,
        token: action.payload.token,
        currentUser: action.payload.user,
        isAdmin: action.payload.isAdmin,
        isAuthenticated: action.payload.isAuthenticated,
      }

    case LOGIN_ADMIN_SUCCESS:
        return {
          ...state,
          token: action.payload.token,
          currentUser: action.payload.user,
          isAdmin: action.payload.isAdmin,
          isAuthenticated: action.payload.isAuthenticated,
        }
    case REGISTER_SUCCES:
      return {
        ...state,
        isRegistered: true,
      }
      case REGISTER_FAIL:
        return {};
    default:
      return state; 
  }
}

export default userReducer; 