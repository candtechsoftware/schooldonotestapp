import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { toggleSideBar } from '../redux/sidebar/sidebar.action';
import logo from '../assets/logo.png';
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

// sidebar nav config
import navigation from './_nav';
import studentNavigation from './_studentnav';

const TheSidebar = ({sidebar, toggleSideBar }) => {
  

  return (
    <CSidebar
      show={sidebar}
    >
      
      <CImg
        src={logo}
        height='150'
        fluid
        className="mb-2"

      />
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
    </CSidebar>
  )
}

TheSidebar.propTypes = {
  toggleSideBar: PropTypes.func,

}
const mapStateToProps = state => ({
  sidebar: state.sidebar.isOpen
})
const SideBarComponent = React.memo(TheSidebar) 
export default connect(mapStateToProps, { toggleSideBar })(SideBarComponent);

