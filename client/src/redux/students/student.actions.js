import {GET_STUDENT, GET_STUDENTS,DELETE_STUDENT, GET_FILTERED_STUDENTS, UPDATE_STUDENT } from '../types';
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


export const getAllStudentsFilter = (e) => async dispatch => {
    try {
        const response = await StudentService.getAllStudents();
        dispatch({
           type: GET_FILTERED_STUDENTS,
           payload: response.filter(p => {
            return p.Student.toLowerCase().includes(e) || p.student_school_id.trim().includes(e);
        })
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
        if (!response) console.log(response);
    } catch (err) {
        console.error('err in archive students ', err);
    }
}

export const getStudent = id => async dispatch => {
    try {
        const response = await StudentService.getStudent(id);
        console.log(response);
        dispatch({
            type: GET_STUDENT,
            payload: response
        })
    } catch (err) {
        console.error('err in archive students ', err);
    }
}


export const updateStudent = (id, data )=> async dispatch => {
    try {
        const response = await StudentService.updateStudent(id, data);
        console.log("in Actions update student: ", response);
        dispatch({
            type: UPDATE_STUDENT,
            payload: response,
        })
    } catch(err){
        console.log('In the actions: ', err)
    }
}