import React, { useState } from "react";
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

import { connect } from "react-redux";
import { setAlert } from "../../../actions/alert";
import CIcon from "@coreui/icons-react";

const Register = props => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    studentId: "",
    grade: "",
    teachersName: "",
    password: "",
    confirmPassword: ""
  });

  const {
    firstName,
    lastName,
    email,
    phone,
    studentId,
    grade,
    teachersName,
    password,
    confirmPassword
  } = formData;

  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}); 

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirmPassword) {
      props.setAlert("Passwords do not match");
      console.log("Passwords do not match");
    } else {
      console.log("passwords match");
    }
  };

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={firstName}
                      onChange={e =>onChange(e)}
                      autoComplete="firstname"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={lastName}
                      onChange={e =>onChange(e)}
                      autoComplete="lastname"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Email"
                      name="email"
                      value={email}
                      onChange={e =>onChange(e)}
                      autoComplete="email"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="tel"
                      placeholder="Phone"
                      name="phone"
                      value={phone}
                      onChange={e =>onChange(e)}
                      autoComplete="phone"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Student Id"
                      name="studentId"
                      value={studentId}
                      onChange={e =>onChange(e)}
                      autoComplete="Student Id"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Grade"
                      name="grade"
                      value={grade}
                      onChange={e =>onChange(e)}
                      autoComplete="grade"
                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Teacher's Name"
                      name="teachersName"
                      value={teachersName}
                      onChange={e =>onChange(e)}
                      autoComplete="teacher"
                    />
                  </CInputGroup>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-lock-locked" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="password"
                      placeholder="Password"
                      value={password}
                      name="password"
                      onChange={e =>onChange(e)}
                      autoComplete="new-password"
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
                      placeholder="Repeat password"
                      name="confirmPassword"
                      value={confirmPassword}
                      onChange={e =>onChange(e)}
                      autoComplete="new-password"
                    />
                  </CInputGroup>
                  <CButton color="success" block>
                    Create Account
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default connect(null, { setAlert })(Register);
