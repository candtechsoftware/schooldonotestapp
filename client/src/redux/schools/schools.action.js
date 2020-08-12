import { GET_SCHOOLS , DELETE_SCHOOL, ADD_SCHOOL } from '../types'; 
import SchoolsService from './schools.service';


export const getAllSchools = () => async dispatch => {
  console.log('I am beingcalled');
  try {
    const response = await SchoolsService.getAllSchools();
    console.log("in actrions ", response)
    dispatch({
      type: GET_SCHOOLS,
      payload: response,
    })
  } catch(error) {
  console.error('Error in service, ', error); 
  }
}

export const archiveSchool = id => async dispatch => {
  try{
    // eslint-disable-next-line no-unused-vars
    const response =  await SchoolsService.archiveSchool(id);
    dispatch({
      type: DELETE_SCHOOL,
      payload: id
    })
  } catch (error) {
    console.error('Error in archive school ', error);
  }
}

export const addSchool = formData => async dispatch => {
  try {
    const response = await SchoolsService.addSchool(formData);
    dispatch({
      type: ADD_SCHOOL,
      payload: response,
    })
  } catch (error) {
      console.error('Error add school ', error); 
  }
}


