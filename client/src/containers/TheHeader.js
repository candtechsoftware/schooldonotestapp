import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {  toggleSideBar } from '../redux/sidebar/sidebar.action';
import {
  CHeader,
  CToggler,
  CHeaderNav,
  CSubheader,
  CBreadcrumbRouter,
  
} from '@coreui/react'

// routes config
import routes from '../routes'

import { 
  TheHeaderDropdown,
}  from './index'

const TheHeader = ({sidebar, toggleSideBar}) => {


  const toggleSidebar = () => {
      toggleSideBar(sidebar);
  }



  const toggleSidebarMobile = () => {
    toggleSideBar(sidebar);
  }

  return (
    <CHeader withSubheader>
      <CToggler
        inHeader
        className="ml-md-3 d-lg-none"
        onClick={toggleSidebarMobile}
      />
      <CToggler
        inHeader
        className="ml-3 d-md-down-none testtoggle"
        onClick={toggleSidebar}
      />

      <CHeaderNav className="d-md-down-none mr-auto">

      </CHeaderNav>

      <CHeaderNav className="px-3">
        <TheHeaderDropdown/>
      </CHeaderNav>

      <CSubheader className="px-3 justify-content-between">
        <CBreadcrumbRouter 
          className="border-0 c-subheader-nav m-0 px-0 px-md-3" 
          routes={routes} 
        />
          <div className="d-md-down-none mfe-2 c-subheader-nav">
          </div>
      </CSubheader>
    </CHeader>
  )
}

TheHeader.propTypes =  {
  toggleSideBar : PropTypes.func
}
const mapStateToProps = state => ({
  sidebar: state.sidebar.showSideBar
})
export default connect(mapStateToProps, { toggleSideBar})(TheHeader);
