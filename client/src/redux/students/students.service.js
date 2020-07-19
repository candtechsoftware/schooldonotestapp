import jwtDecode from 'jwt-decode';
import api from '../../utils/api';
import { dispatch } from 'rxjs/internal/observable/pairs';

class StudentService {
    static async getAllStudents(){
        const configHeaders = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    
        try {
            const response = await api.get('http://localhost:5000/api/students');
            console.log('get all students', response); 
            
            return response.data.students; 
        } catch (error) { 
            console.log('Error in student service getting all students: ', error )
        }

    }
    
    static async archiveStudents(id) {
        try{
            const response = await api.delete(`http://localhost:5000/api/admin/student/${id}`);
            return response;
        }catch(err){
            console.log('err in studnet delete service', err);
        }
    }

}
export default StudentService;