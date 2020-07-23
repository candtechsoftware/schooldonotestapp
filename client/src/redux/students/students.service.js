import jwtDecode from "jwt-decode";
import api from "../../utils/api";

class StudentService {
  static async getAllStudents() {
    const configHeaders = {
      headers: {
        "Content-Type": "application/json"
      }
    };

    try {
      const response = await api.get("http://localhost:5000/api/students");
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
      console.log("Error in student service getting all students: ", error);
    }
  }

  static async archiveStudent(id) {
    try {
      const response = await api.delete(
        `http://localhost:5000/api/admin/student/${id}`
      );
      return response;
    } catch (err) {
      console.log("err in studnet delete service", err);
    }
  }

  static async getStudent(id) {
    try {
      const response = await api.get(`http://localhost:5000/api/student/${id}`);
      const formatted = {
          id: response.data.student.id,
          name: `${response.data.student.first_name} ${response.data.student.last_name}`,
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
      console.log("error in get student service", err);
    }
  }
}
export default StudentService;
