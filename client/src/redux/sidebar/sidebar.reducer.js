import { TOGGLE_SIDEBAR } from '../types';

const initialState = {
  isOpen: false,
}

const sideBarReducer = (state = initialState, action) => {
  const {type, payload} = action;

  switch (type) {
    case TOGGLE_SIDEBAR:
      return {
        ...state,
        isOpen: !state.isOpen
      } 

    default:
      return state; 
  }
}

export default sideBarReducer;
