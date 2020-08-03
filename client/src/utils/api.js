import axios from 'axios';
import {store} from '../store';
import { LOGOUT } from '../redux/types';


const api = axios.create({
  baseUrl: "http://localhost:5000/api",
  headers: {
    'Content-Type': 'application/json'
  }
});


api.interceptors.request.use(
  res => res,
  err => {
    console.log('error in api', err)
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
      console.log('erorr in api js', status);

      store.dispatch({type: LOGOUT});
    }
    return Promise.reject(error);

  }
)

export default api;