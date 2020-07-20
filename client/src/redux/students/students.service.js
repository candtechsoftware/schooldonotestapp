import jwtDecode from 'jwt-decode';
import api from '../../utils/api';

class StudentService {
    static async getAllStudents(){
        const configHeaders = {
            headers: {
                'Content-Type' : 'application/json'
            }
        }
    
        try {
            const response = await api.get('http://localhost:5000/api/students');
            let studentList = [];
            for (let i = 0; i < response.data.students.length; i++){
                let formatted = {
                  id: response.data.students[i].id,
                  Student: `${response.data.students[i].first_name} ${response.data.students[i].last_name}`,
                  School: response.data.students[i].school.name,
                }
                studentList.push(formatted);
            }
            
            return studentList; 
        } catch (error) { 
            console.log('Error in student service getting all students: ', error )
        }

    }
    
    static async archiveStudent(id) {
        try{
            const response = await api.delete(`http://localhost:5000/api/admin/student/${id}`);
            console.log('in service', response)
            return response;
        }catch(err){
            console.log('err in studnet delete service', err);
        }
    }

}
export default StudentService;
