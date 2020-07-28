import {
  GET_DONATONS,
  GET_CURRENT_STUDENT_DONATION,
  DONATION_ERROR,
  ADD_DONATION,
  GET_DONATONS_BY_SCHOOL_ID,
  GET_DONATONS_BY_SCHOOL
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