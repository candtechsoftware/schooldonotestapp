import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { resetPassword } from '../../../redux/user/user.actions';
import { setAlert } from '../../../redux/alert/alert.action';
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";

const ResetPassword = ({resetPassword, isAuthenticated, match, setAlert, success}) => {
  const [formData, setFormData] = useState({
    password: "",
    confirmPassword: ""
  });

  const { password, confirmPassword} = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword){
      setAlert('Passwords Do no match', 'danger', 1000)
    }else {
      resetPassword(match.params.token, password);

  }

  };
  if (success) {
    return <Redirect to='/login'/>
  }
  
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={(e) => onSubmit(e)}>
                    <h1>Reset Passowrd</h1>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        autoComplete="password"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="confirmPassword"
                        placeholder="confirmPassword"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => onChange(e)}
                        autoComplete="current-confirmPassword"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="success" className="px-4">
                          Reset Password
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                          <Link to="/login">
                        <CButton color="success">Back To Login</CButton>
                        </Link>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

ResetPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired,
  setAlert: PropTypes.func.isRequired,

  success: PropTypes.bool
}
const mapStateToProps = state => ({
  success: state.user.success
});

export default connect(mapStateToProps, { resetPassword, setAlert })(ResetPassword);
