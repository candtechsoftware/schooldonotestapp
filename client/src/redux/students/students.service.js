import api from "../../utils/api";
import dotenv from 'dotenv';
dotenv.config();

class StudentService {
  static async getAllStudents() {

    try {
      const response = await api.get(`${process.env.REACT_APP_URL}/api/students`);
      let studentList = [];
      for (let i = 0; i < response.data.students.length; i++) {
        let formatted = {
          id: response.data.students[i].id,
          Student: `${response.data.students[i].first_name} ${response.data.students[i].last_name}`,
          student_school_id: response.data.students[i].student_school_id,
          phone: response.data.students[i].phone,
          grade: response.data.students[i].grade,
          teacher: response.data.students[i].teacher,
          shirt_size: response.data.students[i].shirt_size,
          School: response.data.students[i].school.name
        };
        studentList.push(formatted);
      }

      return studentList;
    } catch (error) {
      console.error("Error in student service getting all students: ", error);
    }
  }

  static async archiveStudent(id) {
    try {
      const response = await api.delete(
        `${process.env.REACT_APP_URL}/api/admin/student/${id}`
      );
      return response;
    } catch (err) {
      console.error("err in studnet delete service", err);
    }
  }

  static async getStudent(id) {
    try {
      const response = await api.get(`${process.env.REACT_APP_URL}/api/student/${id}`);
      const formatted = {
          id: response.data.student.id,
          first_name: response.data.student.first_name,
          last_name: response.data.student.last_name,
          email: response.data.student.email,
          student_school_id: response.data.student.student_school_id,
          phone: response.data.student.phone,
          grade: response.data.student.grade,
          teacher: response.data.student.teacher,
          shirt_size: response.data.student.shirt_size,
          school: response.data.student.school.name,
          school_id: response.data.student.school.id

      }

      return formatted; 

    } catch (err) {
      console.error("error in get student service", err);
    }
  }

  static async updateStudent(id, data) {
    const configHeaders = {
      headers: {
        'Content-Type': 'application/json'
      }
    }
    const body = JSON.stringify(data)
    try{
      const response = await api.post(`${process.env.REACT_APP_URL}/api/student/${id}`,body, configHeaders );
      const formatted = {
        id: response.data.student.id,
        first_name: response.data.student.first_name,
        last_name: response.data.student.last_name,
        email: response.data.student.email,
        student_school_id: response.data.student.student_school_id,
        phone: response.data.student.phone,
        grade: response.data.student.grade,
        teacher: response.data.student.teacher,
        shirt_size: response.data.student.shirt_size,
        school: response.data.student.school.name,
        school_id: response.data.student.school.id

    }
    return formatted; 
    } catch (err) {
      console.log(err)
    }

  }
}
export default StudentService;
