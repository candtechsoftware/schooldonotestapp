import { TOGGLE_SIDEBAR } from '../types';

export const toggleSideBar = (isOpen = false) => async dispatch => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  })
}
