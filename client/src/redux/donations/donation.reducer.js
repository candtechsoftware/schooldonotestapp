import {
  GET_DONATONS,
  GET_CURRENT_STUDENT_DONATION,
  DONATION_ERROR,
  GET_DONATONS_BY_SCHOOL,
  ADD_DONATION,
  GET_DONATONS_BY_SCHOOL_ID,
  GET_DONATONS_BY_STUDENT,
  GET_DONATONS_BY_STUDENT_ID
} from "../types";

const initialState = {
  donations: [],
  donation: null,
  donationSuccess: false, 
  loading: true,
  error: {}
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_DONATONS:
      return {
        ...state,
        loading: false,
        donations: action.payload,
        total: action.payload.total,
      };
    case GET_CURRENT_STUDENT_DONATION:
      return {
        ...state,
        donations: action.payload,
        loading: false
      };

    case GET_DONATONS_BY_SCHOOL:
      return {
        ...state,
        donations: action.payload,
        loading: false 
      };
    case GET_DONATONS_BY_SCHOOL_ID:
      return {
        ...state,
        donations: action.payload,
        loading: false
      };
      case GET_DONATONS_BY_STUDENT:
        return {
          ...state,
          donations: action.payload,
          loading: false 
        };
      case GET_DONATONS_BY_STUDENT_ID:
        return {
          ...state,
          donations: action.payload,
          loading: false
        }
    case DONATION_ERROR:
      return {
        error: action.payload
      };
      case ADD_DONATION:
        return {
          ...state,
          donation: action.payload,
          donationSuccess: true,
          
        };
    default:
      return {};
  }
}
