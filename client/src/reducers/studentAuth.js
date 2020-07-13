import {
  REGISTER_SUCCES,
  REGISTER_FAIL,
  STUDENT_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
} from "../actions/types";
import setAuthToken from "../utils/setAuthToken";
var jwtDecode = require("jwt-decode");

const initialState = {
  token: localStorage.getItem("token"),
  success: false,
  loading: true,
  isAdmin: false,
  isAuthenticated: false,
  registerComplete: false,
  user: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STUDENT_LOADED:
      return {
        ...state,
        isAuthenticated: true,
        loading: false,
        isLoggedInStudent: true,

        user: payload,
      };

    case REGISTER_SUCCES:
      return {
        ...state,
        success: true,
        registerComplete: true,
        loading: false,
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", payload.token);
      setAuthToken(payload.token);
      const decoded = jwtDecode(payload.token);
      return {
        ...state,
        ...payload,
        isAdmin: decoded.isAdmin || false,
        isAuthenticated: decoded.isAuthenticated || false,
        loading: false,
      };
    case LOGIN_FAIL:
    case AUTH_ERROR:
    case REGISTER_FAIL:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        success: false,
        loading: false,
      };

    case LOGOUT:
      return {
        ...state,
        token: null,
        isLoggedInStudent: false,
        student: null,
      };

    default:
      return state;
  }
}
