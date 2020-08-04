import React, { useState } from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import { setAlert } from '../../../../redux/alert/alert.action';
import { registerAdmin } from '../../../../redux/user/user.actions';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
  CRow
} from "@coreui/react";
import CIcon from "@coreui/icons-react";


const AdminRegister = ({registerAdmin, setAlert, isRegistered}) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: ""
  });

  const {
    email,
    password,
    confirmPassword
  } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = e => {
    e.preventDefault();
    if (password !== confirmPassword){
      setAlert('Password do not match', 'danger', 4000)
    }
    else {
      console.log(formData);
    }
  }

  return (
    <CCardBody>
    <CForm onSubmit={(e) => onSubmit(e)}>
      <h2>Create An Admin Account </h2>
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
      <CInputGroup className="mb-4">
        <CInputGroupPrepend>
          <CInputGroupText>
            <CIcon name="cil-lock-locked" />
          </CInputGroupText>
        </CInputGroupPrepend>
        <CInput
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={confirmPassword}
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

      </CRow>
    </CForm>
    </CCardBody>

  )

};
