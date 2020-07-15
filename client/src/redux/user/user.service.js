import jwtDecode from 'jwt-decode';
import api from '../../utils/api';


class UserService {

  static async registerStudent(formData) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(formData); 
    try {
        const response = await api.post('http://localhost:5000/api/student/register', body, configHeaders);
        console.log("in service ",response.data.student);
        console.log("in service ",response.data.message);
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
      const response = await api.post(`http://localhost:5000/api/student/login`, body, configHeaders);
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
      console.log(err);
    }
  }


  static async loadStudent() {
    console.log('in service')
    try {
      const token = localStorage.token;
      if (token){
        const response = await api.get('/api/student');
        console.log('Load Student Response', response); 
        return response;
      }
    } catch (err) {
      console.log('Error in load student service: ', err);
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
      const response = await api.post(`http://localhost:5000/api/admin/login`, body, configHeaders);
      const decodedToken = jwtDecode(response.data.token)
      console.log("Decoded Token: ",decodedToken);
      let user = {
        token: response.data.token,
        user: decodedToken.admin,
        isAdmin: decodedToken.isAdmin,
        isAuthenticated: decodedToken.isAuthenticated
      }; 

      localStorage.setItem('token', JSON.stringify(user.token));

      return user; 

    } catch (err){
      console.log("error in service: ", err);
    }
  }

  static async logout() {
    localStorage.removeItem('user');
  }

}

export default UserService;