import { CREATE_ADMIN, DELETE_ADMIN, UPDATE_SETTING, LOAD_SETTING } from '../types';


const initialState = {
  admin: null,
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
      case DELETE_ADMIN:
        return {
          ...state,
          loading: false,
        }
        case LOAD_SETTING:
          return {
            ...state,
            settings: payload,
            loading: false, 
          }
        case UPDATE_SETTING:
          return {
            ...state,
            settings: payload,
            loading: true, 
          }
      
        default: 
        return state;
  }

}