import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import { toggleSideBar } from '../redux/sidebar/sidebar.action';

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
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
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
      <CSidebarMinimizer className="c-d-md-down-none"/>
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

