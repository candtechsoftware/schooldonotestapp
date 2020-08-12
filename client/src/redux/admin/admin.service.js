import api from '../../utils/api';
import dotenv from 'dotenv';
dotenv.config();

class AdminService {

  static async getAllSettings(){
    try {
      const response = await api.get(`${process.env.REACT_APP_URL}/api/admin/settings/`);
      return response.data.settings[0];
    } catch(err){
      console.error(err);
    }
  }

  static async updateSetting(setting_id, data){
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(data);
    try {
      const response = await api.post(`${process.env.REACT_APP_URL}/api/admin/settings/${setting_id}`, body, configHeaders );
      return response.settings;
    } catch(err){
      console.error(err);
    }
  }

  static async getAllAdmins() {
    try {
      const response = await api.get(`${process.env.REACT_APP_URL}/api/admins`)
      return response.data.admins; 
    } catch(err) {
      console.error(err);
    }
  }

  static async archiveAdmin(id) {
    try {
      const response = await api.post(`${process.env.REACT_APP_URL}/api/admin/${id}`)
      return response; 
    } catch(err){
      console.error('error in the admin service: ', err); 
    }
  }

}

export default AdminService;