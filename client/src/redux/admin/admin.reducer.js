import { CREATE_ADMIN, DELETE_ADMIN, UPDATE_SETTING, LOAD_SETTING, GET_ALL_ADMINS } from '../types';


const initialState = {
  admins: null,
  settings: [],
  loading: true
}

export default function(state = initialState, action){
  const {type , payload} = action;

  switch (type){
    case CREATE_ADMIN:
      return {
        ...state,
        loading: false,
        admin: payload
      }
    case GET_ALL_ADMINS:
      return {
        ...state,
        admins: payload,
        loading: false,
      }
      case DELETE_ADMIN:
        return {
          ...state,
          admins: state.admins.filter(min => min.id !== payload),
          loading: false,
        }
        case LOAD_SETTING:
          return {
            ...state,
            settings: payload,
            loading: false, 
          }
        case UPDATE_SETTING:
          console.log('reducer payload' , payload);
          return {
            ...state,
            settings: payload,
            loading: true, 
          }
      
        default: 
        return state;
  }

}