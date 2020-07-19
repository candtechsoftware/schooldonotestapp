import { 
  GET_DONATONS,
  GET_CURRENT_STUDENT_DONATION,
  DONATION_ERROR
} from '../types'

const initialState = {
  donations: [],
  donation: null,
  loading: true , 
  error: {}
}


export default function(state = initialState, action) {

  switch (action.type) {
    case GET_DONATONS:
      return {
        ...state,
        loading: false, 
        donations: action.payload,
      }
    case GET_CURRENT_STUDENT_DONATION:
      return {
        ...state,
        donations: action.payload,
        loading: false,
      }
    case DONATION_ERROR:
      return {
        error: action.payload
      }      
    default:
      return {}
  }

}