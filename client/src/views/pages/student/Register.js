import React, { useState, useEffect } from "react";
import { Link, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../../redux/alert/alert.action';
import { registerStudent } from '../../../redux/user/user.actions';
import { getAllSchools } from '../../../redux/schools/schools.action'
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

const Register = ({registerStudent, setAlert, isRegistered, getAllSchools, schools: {schools, loading }}) => {
  useEffect(()=>{
    getAllSchools();
  }, [getAllSchools]);


  const grades = [
    'Select Grade',
    'Pre-L',
    'Kindergarten',
    '1st',
    '2nd',
    '3rd',
    '4th',
    '5th',
    '6th',
    '7th',
    '8th'
  ];
  const sizes = [
    'Select Size',
    'Youth small',
    'Youth medium',
    'Youth large',
    'Adult small',
    'Adult medium',
    'Adult large',
  ]

 const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    student_school_id: "",
    grade: "",
    shirt_size: "",
    school_id: "",
    teacher: "",
    password: "",
    confirm_password: ""
  });
  

  const {
    first_name,
    last_name,
    email,
    phone,
    student_school_id,
    grade,
    shirt_size,
    teacher,
    school_id,
    password,
    confirm_password
  } = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}); 

  const onSubmit = async e => {
    e.preventDefault();
    if (password !== confirm_password){
      setAlert('Passwords do not match', 'danger');
    } else {
    registerStudent(formData);
  }
  } 

  if (isRegistered) {
    return <Redirect to="/login"/>
  }
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={e=> onSubmit(e)}>
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                                    <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder="Student Id"
                      name="student_school_id"
                      value={student_school_id}
                      onChange={e =>onChange(e)}
                      autoComplete="Student Id"
                      required
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
                      placeholder="First Name"
                      name="first_name"
                      value={first_name}
                      onChange={e =>onChange(e)}
                      autoComplete="first_name"
                      required

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
                      name="last_name"
                      value={last_name}
                      onChange={e =>onChange(e)}
                      autoComplete="lastname"
                      required

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
                      required

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
                      required

                    />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                         <select
                      type="select"
                      placeholder="School"
                      name="school_id"
                      className="custom-select"
                      value={school_id}
                      onChange={e =>onChange(e)}
                      autoComplete="grade"
                      required

                    > 
                      <option key='select' value='select school'>Select School</option>
                      {schools.map(school => <option key={school.id} value={school.id}>{school.name}</option>)}
                      </select>               
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <select
                      type="select"
                      placeholder="Grade"
                      name="grade"
                      className="custom-select"
                      value={grade}
                      onChange={e =>onChange(e)}
                      autoComplete="grade"
                      required

                    >
                      {grades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                      </select>
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <select
                      type="text"
                      placeholder="Shirt Size"
                      name="shirt_size"
                      className="custom-select"
                      value={shirt_size}
                      onChange={e =>onChange(e)}
                      autoComplete="shirt_size"
                      required

                    >
                     {sizes.map(size => <option key={size} value={size}>{size}</option>)}

                      </select>
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
                      name="teacher"
                      value={teacher}
                      onChange={e =>onChange(e)}
                      autoComplete="teacher"
                      required

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
                      required

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
                      name="confirm_password"
                      value={confirm_password}
                      onChange={e =>onChange(e)}
                      autoComplete="new-password"
                      required

                    />
                  </CInputGroup>
                  <CButton type="submit" color="success" block>
                    Create Account
                  </CButton>
                </CForm>
                <CRow>
                      <CCol xs="8">
                      <Link to="/login">
                      <CButton color="success" className="mt-3" active tabIndex={-1}>Current User Login</CButton>
                    </Link>
                      </CCol>
              </CRow>
              </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
}

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  registerStudent: PropTypes.func.isRequired,
  getAllSchools: PropTypes.func.isRequired, 
  isRegistered: PropTypes.bool
}

const mapStateToProps = state => ({
  isRegistered: state.user.isRegistered,
  schools: state.schools
})


export default connect(mapStateToProps, { setAlert, registerStudent, getAllSchools })(Register);
