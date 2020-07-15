import api from './api';

const setAuthtoken = token => {
  if (token) {
    api.defaults.headers.common['Authorization'] = token;
    localStorage.setItem('token', token);
  } else {
    delete api.defaults.headers.common['Authorization'];
    localStorage.removeItem('token');
  }
};


export default setAuthtoken;