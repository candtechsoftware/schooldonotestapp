import api from '../../utils/api'; 

class SchoolsService {
  static async getAllSchools() {
    try {
      const response = await api.get('http://localhost:5000/api/schools');
      return response.data.schools

    } catch (error) {
      console.error('Error in school service, ', error) ;
    }
  }

  static async archiveSchool(id) {
    try {
      const response = await api.delete(`http://localhost:5000/api/admin/school/${id}`);
      return response; 

    } catch (error) {
      console.error('error in archive service', error); 

    }
  }
  static async addSchool(formData) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
      try {
        const body = JSON.stringify(formData);
        const response = await api.post('http://localhost:5000/api/admin/school', body, configHeaders)
        return response.data.school_data ;
    } catch (error) {
      console.error('error in add service ', error);
    }
  }
  
}

export default SchoolsService; 