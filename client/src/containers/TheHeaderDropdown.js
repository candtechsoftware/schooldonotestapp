import React, { Fragment } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { logout } from "../actions/studentauth";
import {
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CLink,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const TheHeaderDropdown = ({ studentAuth: { isAdmin }, logout }) => {
  const studentLinks = (
    <Fragment>
      <CDropdownItem>
        <CIcon name="cil-lock-locked" className="mfe-2" />
        My Account
      </CDropdownItem>
      <CLink onClick={logout} href="/login">
        <CDropdownItem>
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CDropdownItem>
      </CLink>
    </Fragment>
  );

  const adminLinks = (
    <Fragment>
      <CDropdownItem>
        <CIcon name="cil-lock-locked" className="mfe-2" />
        My Account
      </CDropdownItem>

      <CDropdownItem>
        <CIcon name="cil-lock-locked" className="mfe-2" />
        My Settings
      </CDropdownItem>
      <CDropdownItem onClick={logout}>
        <CLink href="https://coreui.io">
          <CIcon name="cil-lock-locked" className="mfe-2" />
          Logout
        </CLink>
      </CDropdownItem>
    </Fragment>
  );

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
          <Fragment>{isAdmin ? adminLinks : studentLinks}</Fragment>
        </CDropdownMenu>
      </CDropdown>
    </div>
  );
};

TheHeaderDropdown.propTypes = {
  logout: PropTypes.func.isRequired,
  studentAuth: PropTypes.bool,
};
const mapStateToProps = (state) => ({
  studentAuth: state.studentAuth.isAdmin,
});

export default connect(mapStateToProps, { logout })(TheHeaderDropdown);
