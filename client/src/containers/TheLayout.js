import React, {
  useEffect,
  useState,
  useRef
} from 'react'
import {
  TheContent,
  TheSidebar,
  TheFooter,
  TheHeader
} from './index'
import {
  loadStudent
} from '../redux/user/user.actions';
import setAuthToken from '../utils/authHeader';
import {
  store
} from '../store';
import {
  useOnClickOutSide
} from './hooks';

const TheLayout = ({
  sidebar
}) => {
  useEffect(() => {
    setAuthToken(localStorage.token);
    store.dispatch(loadStudent);

  })
  const node = useRef();
  const [open, setOpen] = useState(false);

  useOnClickOutSide(node, () => setOpen(false));

  return ( <div ref = {node}
    className = "c-app c-default-layout" >
    <TheSidebar isOpen = {
      open
    }
    setOpen = {
      setOpen
    }
    /> <div className = "c-wrapper" >
    <    TheHeader isOpen = {
      open
    }
    setOpen = {
      setOpen
    }
    /> <div className = "c-body" >
    <TheContent / >
    </div> <
    TheFooter / >
    </div> </div>
  )
}

export default TheLayout
