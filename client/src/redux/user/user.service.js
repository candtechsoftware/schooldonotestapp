import jwtDecode from 'jwt-decode';
import api from '../../utils/api';
import dotenv from 'dotenv';
dotenv.config();

class UserService {

  static async registerStudent(formData) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData); 
    try {
        const response = await api.post(`${process.env.REACT_APP_URL}/api/student/register`, body, configHeaders);
        const user = {
          user: response.data.student,
          message: response.data.message
        }
        return user; 
      } catch (err) {
      return { user: null, message: err.message }
    }


  }
  static async loginStudent(email, password) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({email, password});
    try {
      const response = await api.post(`${process.env.REACT_APP_URL}/api/student/login`, body, configHeaders);
      const decodedToken = jwtDecode(response.data.token)
      let user = {
        token: response.data.token,
        user: decodedToken.student || null,
        isAdmin: decodedToken.isAdmin || false,
        isAuthenticated: decodedToken.isAuthenticated || false,
      }; 
      localStorage.setItem('token', JSON.stringify(user.token));

      return user; 

    } catch (err){
      console.error(err);
    }
  }


  static async loadStudent() {
    try {
      const token = localStorage.token;
      if (token){
        let response = await api.get('/api/student');
 
        response = {
          status: response.status,
          user: {
            id: response.data.user.id,
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
          },
          isAdmin: response.data.user.isAdmin,
          isAuthenticated: response.data.user.isAuthenticated,

        }

        return response;
      }
    } catch (err) {
      return {};
    }
  }

  static async loadAdmin() {
    try {
      const token = localStorage.token;
      if (token){
        let response = await api.get('/api/admin');
        
        response = {
          user: {
            id: response.data.user.id,
            first_name: response.data.user.first_name,
            last_name: response.data.user.last_name,
          },
          isAdmin: response.data.user.isAdmin,
          isAuthenticated: response.data.user.isAuthenticated,

        }

        return response;
      }
    } catch (err) {
      return {};
    }
  }

  static async loginAdmin(email, password) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify({email, password});
    try {
      const response = await api.post(`${process.env.REACT_APP_URL}/api/admin/login`, body, configHeaders);
      const decodedToken = jwtDecode(response.data.token)
      let user = {
        token: response.data.token,
        user: decodedToken.admin,
        isAdmin: decodedToken.isAdmin,
        isAuthenticated: decodedToken.isAuthenticated
      }; 

      localStorage.setItem('token', JSON.stringify(user.token));

      return user; 

    } catch (err){
    }
  }

  static async logout() {
    localStorage.removeItem('user');
  }

}

export default UserService;