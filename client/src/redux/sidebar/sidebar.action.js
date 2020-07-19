import { TOGGLE_SIDEBAR } from '../types';
import {dispatch} from 'rxjs/internal/observable/pairs';

export const toggleSideBar = (isOpen = false) => dispatch => {
  dispatch({
    type: TOGGLE_SIDEBAR,
  })
}
