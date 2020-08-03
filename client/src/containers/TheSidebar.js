import React from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types'; 
import logo from '../assets/logo.png';
import {
  CCreateElement,
  CSidebar,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarNavDropdown,
  CSidebarNavItem,
  CImg
} from '@coreui/react'


// sidebar nav config
import navigation from './_nav';

const TheSidebar = ({isOpen}) => {
  return (
    <CSidebar
      show={isOpen}
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
  isAdmin: PropTypes.bool,

}
const mapStateToProps = state => ({
  isAdmin: state.user.isAdmin,

})
const SideBarComponent = React.memo(TheSidebar) 
export default connect(mapStateToProps, {  })(SideBarComponent);

