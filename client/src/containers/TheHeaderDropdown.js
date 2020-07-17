import React, { Fragment } from "react";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,

} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { logout } from '../redux/user/user.actions'

const TheHeaderDropdown = ({ user: {isAuthenticated }, logout }) => {
  return (
  <div>
  <CDropdown inNav className="c-header-nav-items mx-2" direction="down">
    <CDropdownToggle className="c-header-nav-link" caret={false}>
      <div className="header-account">
        <p>My Account</p>
      </div>
    </CDropdownToggle>
    <CDropdownMenu className="pt-0" placement="bottom-end">
      <CDropdownItem header tag="div" color="light" className="text-center">
        <strong>Account</strong>
      </CDropdownItem>
    <Fragment>
      <CDropdownItem>
        <CIcon name="cil-lock-locked" className="mfe-2" />
        My Account
      </CDropdownItem>
        <CDropdownItem href="/login" onClick={logout} className="test">
          <CIcon name="cil-lock-locked" className="mfe-2" />
            Logout
        </CDropdownItem>
    </Fragment>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

TheHeaderDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({
  user: state.user 
})
export default connect(mapStateToProps, { logout })(TheHeaderDropdown);
