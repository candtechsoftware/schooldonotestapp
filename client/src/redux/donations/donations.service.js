import {} from '../types.js';
// import { setAlert } from '../alert/alert.action';
import api from '../../utils/api';

class DonationService {
  static async getDonationByStudent() {
    try {
      const response = await api.get('http://localhost:5000/api/student/donations')
      return response.data; 
    } catch (err) {
      console.error(err);
    }
  }
  static async getAllDonations() {
    try {
        const response = await api.get("http://localhost:5000/api/admin/donations");
        return response.data.donations;
    } catch(err) {
      console.error("This is in all donations: ", err);
    }

  }

  static async addDonation(donation) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(donation)
    try {
      const request = await api.post('http://localhost:5000/api/donation', body, configHeaders);
      return request;

    } catch (err){
      console.log('error in add donation service: ' , err); 
    }
  }


}

export default DonationService;