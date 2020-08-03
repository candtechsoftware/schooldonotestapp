import api from '../../utils/api';

class AdminService {
  static async getAllSettings(){
    try {
      const response = await api.get('http://localhost:5000/api/admin/settings/');
      return response.data.settings;
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
      const response = await api.post(`http://localhost:5000/api/admin/settings/${setting_id}`, body, configHeaders );
      console.log("In service: ", response)
      return response.settings;
    } catch(err){
      console.error(err);
    }
  }

}

export default AdminService;