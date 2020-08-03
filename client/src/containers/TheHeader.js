import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  toggleSideBar } from '../redux/sidebar/sidebar.action';
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CSubheader,
 
} from '@coreui/react'


import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = ({isAdmin, setOpen, loadStudent, isOpen }) => {

  console.log('in header', isAdmin);
  return (
    <CHeader withSubheader>
    {isAdmin ?  (
    <>
    <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={() => setOpen(!isOpen)}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none testtoggle"
        onClick={() => setOpen(!isOpen)}
      /></>
      ) : (<></>)}

      <CHeaderNav className="d-md-down-none mr-auto">

      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">

          <div className="d-md-down-none mfe-2 c-subheader-nav">
          </div>
      </CSubheader>
    </CHeader>
  )
}

TheHeader.propTypes =  {
  isAdmin : PropTypes.bool
}
const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin
})
export default connect(mapStateToProps, { toggleSideBar})(TheHeader);
