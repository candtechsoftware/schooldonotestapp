import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import { loginStudent } from '../../../redux/user/user.actions';
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

const ResetPassword = ({loginStudent, isAuthenticated}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    loginStudent(email, password);
  };
  if (isAuthenticated) {
    return <Redirect to='/students'/>
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
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChange(e)}
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChange(e)}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="success" className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs="6" className="text-right">
                        <CButton color="success">Forgot password?</CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard
                className="text-white bg-primary py-5 d-md-down-none"
                style={{ width: "44%" }}
              >
                <CCardBody className="text-center">
                  <div>
                    <h2>Sign up</h2>
                    <div>
                      <Link to="/register">
                        <CButton
                          color="success"
                          className="mt-3"
                          active
                          tabIndex={-1}
                        >
                          Register Now!
                        </CButton>
                      </Link>
                    </div>
                  </div>
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
  loginStudent: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
}
const mapStateToProps = state => ({
  isAuthenticated: state.user.isAuthenticated
});

export default connect(mapStateToProps, { loginStudent })(ResetPassword);
