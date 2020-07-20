import { GET_SCHOOLS, DELETE_SCHOOL, ADD_SCHOOL} from '../types'; 

const initialState = {
    schools: [],
    loading: true,
    payload: null,
    showPopup: false,
}


const schoolReducer = (state = initialState, action ) => {
  const {type, payload } = action; 
    
  switch (type){
    case GET_SCHOOLS:
      return {
        ...state,
        schools: payload,
        loading: false,
      }
    case DELETE_SCHOOL: 
      return {
        ...state,
        schools: state.schools.filter(sch => sch.id !== payload),
        loading: false
      }
      case ADD_SCHOOL: 
  
      return {
        ...state,
        schools: [payload, ...state.schools],
        loading: false
      }

    default:
      return state
  }
}

export default schoolReducer; 


