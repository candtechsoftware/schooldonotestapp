import {} from '../types.js';
// import { setAlert } from '../alert/alert.action';
import api from '../../utils/api';

class DonationService {
  static async getDonationByStudent() {
    try {
      const response = await api.get('http://localhost:5000/api/student/donations')
      return response.data; 
    } catch (err) {
      console.log(err);
    }
  }
  static async getAllDonations() {
    try {
        const response = await api.get("http://localhost:5000/api/admin/donations");
        return response.data.donations;
    } catch(err) {
      console.log("This is in all donations: ", err);
    }

  }

}

export default DonationService;