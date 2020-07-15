import React, { useEffect } from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import { loadStudent } from '../redux/user/user.actions';
import setAuthToken from '../utils/authHeader';
import store from '../store';

const TheLayout = () => {
  useEffect(()=> {
    setAuthToken(localStorage.token);
    store.dispatch(loadStudent);

  })
  return (
    <div className="c-app c-default-layout">
      <TheSidebar/>
      <div className="c-wrapper">
        <TheHeader/>
        <div className="c-body">
          <TheContent/>
        </div>
        <TheFooter/>
      </div>
    </div>
  )
}

export default TheLayout
