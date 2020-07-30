import {
  GET_DONATONS,
  GET_CURRENT_STUDENT_DONATION,
  DONATION_ERROR,
  ADD_DONATION,
  GET_DONATONS_BY_SCHOOL_ID,
  GET_DONATONS_BY_SCHOOL,
  GET_DONATONS_BY_STUDENT,
  GET_DONATONS_BY_STUDENT_ID,
  GET_FILTERED_STUDENTS
} from "../types";
import setAuthtoken from "../../utils/authHeader";
import DonationService from "./donations.service";

export const loadDonationByStudent = () => async dispatch => {
  if (localStorage.token) {
    setAuthtoken(localStorage.token);
  }
  try {
    let response = await DonationService.getDonationByStudent();
    dispatch({
      type: GET_CURRENT_STUDENT_DONATION,
      payload: response.donations
    });
    console.log("in action ", response);
  } catch (err) {
    dispatch({
      type: DONATION_ERROR
    });
  }
};

export const getAllDonations = () => async dispatch => {
  if (localStorage.token) {
    setAuthtoken(localStorage.token);
  }

  try {
    let response = await DonationService.getAllDonations();

    dispatch({
      type: GET_DONATONS,
      payload: response
    });
  } catch (err) {
    console.error("err in get all donations actions: ", err);
  }
};

export const addDonation = donation => async dispatch => {
  try {
    const response = await DonationService.addDonation(donation);
    console.log(response);
    dispatch({ 
      type: ADD_DONATION,
      payload: response
    })
  } catch (err) {
    console.log("error in action add donation: ", err);
  }
};

export const getDonationsGroupedBySchool = () => async dispatch => {
  try {
    const response = await DonationService.getDonationsGroupedBySchool();
    dispatch({
      type: GET_DONATONS_BY_SCHOOL,
      payload: response
    });
  } catch (err) {
    console.log("Error in actions groupd by school ", err);
  }
};

export const getDonationsBySchoolId = (id) => async dispatch => {
  try {
    const response = await DonationService.getDonationsBySchoolId(id);
    console.log('response in action', response);
    dispatch({
      type: GET_DONATONS_BY_SCHOOL_ID,
      payload: response.data
    })
  } catch (err) {
    console.error('err in get donation by school id acions ', err)
  }

}

  export const getDonationsGroupedByStudent = () => async dispatch => {
    try {
      const response = await DonationService.getDonationsGroupedByStudent();
      console.log('in actions: ', response);
      dispatch({
        type: GET_DONATONS_BY_STUDENT,
        payload: response
      });
    } catch (err) {
      console.log("Error in actions groupd by school ", err);
    }
  };
  
  export const getDonationsByStudentId = (id) => async dispatch => {
    try {
      const response = await DonationService.getDonationsByStudentId(id);
      console.log('response in action', response);
      dispatch({
        type: GET_DONATONS_BY_STUDENT_ID,
        payload: response.data
      })
    } catch (err) {
      console.error('err in get donation by school id acions ', err)
    }
  }