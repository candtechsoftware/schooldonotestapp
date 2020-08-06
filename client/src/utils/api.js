import axios from 'axios';
import {store} from '../store';
import { LOGOUT } from '../redux/types';
import dotenv from 'dotenv';
dotenv.config();

const api = axios.create({
  baseUrl: `${process.env.REACT_APP_URL}/api`,
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.request.use(
  res => res,
  err => {
    console.error('error in api', err)
    if (err.res.data.message === 'Token is not valid') {
      store.dispatch({ type: LOGOUT });
    }
    return Promise.reject(err);
  }
);

api.interceptors.response.use(
  res => res,
  error => {
    const {status} = error.response;
    if (status === 401){
      console.error('erorr in api js', status);

      store.dispatch({type: LOGOUT});
    }
    return Promise.reject(error);

  }
)

export default api;