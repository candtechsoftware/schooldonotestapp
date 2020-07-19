import { GET_STUDENTS,DELETE_STUDENT } from '../types';
import StudentService from './students.service';


export const getAllStudents = () => async dispatch => {
    try {
        const response = await StudentService.getAllStudents();
        console.log(response," : in actions");
        dispatch({
           type: GET_STUDENTS,
           payload: response
        })
    } catch (err) {
        console.log('Error in student actions gettings all students: ', err)
    }

}

export const archiveStudents = id => async dispatch => {
    try {
        const response = await StudentService.archiveStudent(id);
        dispatch({
            type: DELETE_STUDENT,
            payload: id
        })
    } catch (err) {
        console.log('err in arhive students ');
    }
}