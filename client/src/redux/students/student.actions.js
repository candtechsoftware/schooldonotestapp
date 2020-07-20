import { GET_STUDENTS,DELETE_STUDENT } from '../types';
import StudentService from './students.service';


export const getAllStudents = () => async dispatch => {
    try {
        const response = await StudentService.getAllStudents();
        dispatch({
           type: GET_STUDENTS,
           payload: response
        })
    } catch (err) {
        console.error('Error in student actions gettings all students: ', err)
    }

}

export const archiveStudent = id => async dispatch => {
    try {
        const response = await StudentService.archiveStudent(id);
        dispatch({
            type: DELETE_STUDENT,
            payload: id
        })
    } catch (err) {
        console.error('err in archive students ', err);
    }
}
