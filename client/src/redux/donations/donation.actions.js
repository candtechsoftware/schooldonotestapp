import { 
  
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
    console.log('error in donation load by student: ', err); 
    dispatch({
      type: DONATION_ERROR
    })
  }
}