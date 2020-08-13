import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { sendResetLink } from '../../../redux/user/user.actions';
import { setAlert } from '../../../redux/alert/alert.action.js';
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

const ForgotPassword = ({sendResetLink,  setAlert, success}) => {
  const [formData, setFormData] = useState({
    email: "",

  });

  const { email} = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log(email);
    setAlert('Email Sent', 'success', 1000);
    sendResetLink(email);
  };
  if(success){
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
                    <h1>ForgotPassword</h1>
                    <p className="text-muted">Enter Email</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <Link to="/login">
                        <CButton  color="success" className="px-4">
                          Back to login
                        </CButton>
                        </Link>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton type="submit" color="success">Reset Password</CButton>
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

ForgotPassword.propTypes = {
  setAlert:  PropTypes.func.isRequired,
  sendResetLink: PropTypes.func.isRequired,
  success: PropTypes.bool
}
const mapStateToProps = state => ({
  success: state.user.success
});

export default connect(mapStateToProps, { setAlert, sendResetLink })(ForgotPassword);
