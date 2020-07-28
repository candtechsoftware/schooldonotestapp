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

  static async getDonationsGroupedBySchool(){
    try {
      const response = await api.get("http://localhost:5000/api/admin/school/donations");
      console.log("response in service", response);

      return response.data.data; 

    } catch (err) {
      console.log('Error in view donations grouped by school service ', err)
    }
  }

  static async getDonationsBySchoolId(id){
    try {
      const response = await api.get(`http://localhost:5000/api/admin/school/donations/${id}`)
    console.log('response in get donation by school id service' , response);
    
    
    let formated = []
    for (let data of response.data.data){
      data.student = `${data.student.first_name} ${data.student.last_name}`
      data.amount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD"
      }).format(data.amount)
      data.school = data.school.name
    }
    console.log('IN SERVICE' , response.data.data);
    return response.data;
    } catch (err){
      console.log('error in service ', err); 
    }
  }


}

export default DonationService;
