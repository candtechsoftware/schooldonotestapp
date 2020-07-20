import { 
  GET_DONATONS, 
  GET_CURRENT_STUDENT_DONATION,
  DONATION_ERROR
} from '../types';
import setAuthtoken from '../../utils/authHeader';
import DonationService from './donations.service';

export const loadDonationByStudent = () => async dispatch => {
  if (localStorage.token){
    setAuthtoken(localStorage.token);
  }
  try {
    let response = await DonationService.getDonationByStudent();
    dispatch({ 
      type: GET_CURRENT_STUDENT_DONATION,
      payload: response.donations
    })

  } catch (err) {
    dispatch({
      type: DONATION_ERROR
    })
  }
}


export const getAllDonations = () => async dispatch => {
  if(localStorage.token){
    setAuthtoken(localStorage.token);
  }

  try {
    let response = await DonationService.getAllDonations();

    dispatch({
      type: GET_DONATONS,
      payload: response,
    })
  } catch (err) {
    console.error('err in get all donations actions: ', err);
  }

}