import React, { useEffect,useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { setAlert } from '../../../../redux/alert/alert.action';
import Spinner from '../../student/Dashboard/Spinner'
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
import { getStudent, updateStudent } from '../../../../redux/students/student.actions';
import { getAllSchools } from '../../../../redux/schools/schools.action';


const ManageSingleStudent = ({
  getStudent,
  getAllSchools,
  updateStudent,
  schools,
  student: { student, loading },
  match
  }) => {
  
  
  useEffect( () => {
      getStudent(match.params.id)
      getAllSchools();
  },[getStudent, match.params.id])



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


 console.log("Shoud be school,",schools)
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
  } = formData;
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value}); 

  const onSubmit = async e => {
    e.preventDefault();
    getAllSchools();
    for(let data in formData){
      if (formData[data] == "" ||formData[data] == undefined ){
        formData[data] = student[data]
      }
    }
      setAlert('Success', 'sucess', 3300);
      updateStudent(student.id, formData);
  } 



  return loading || student == null ? (
    <div>
      <Spinner/> 
    </div>
  ) : (
    <div >
      <CContainer>
        <CRow >
          <CCol>
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm onSubmit={e=> onSubmit(e)}>
                  <h1>{`${student.first_name} ${student.last_name}`}</h1>
                  <p className="text-muted">Update Student Account</p>
                  <p className="current-info">Current School Id: {student.student_school_id}</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-pencil" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder={student.student_school_id}
                      name="student_school_id"
                      value={student_school_id}
                      onChange={e =>onChange(e)}
                      autoComplete="Student Id"
                      
                    />
                  </CInputGroup>
                  <p className="current-info">Current First Name: {student.first_name}</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder={student.first_name}
                      name="first_name"
                      value={first_name}
                      onChange={e =>onChange(e)}
                      autoComplete="first_name"
                      

                    />
                  </CInputGroup>
                  <p className="current-info">Current Last Name: {student.last_name}</p>
                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder={student.last_name}
                      name="last_name"
                      value={last_name}
                      onChange={e =>onChange(e)}
                      autoComplete="lastname"
                      

                    />
                  </CInputGroup>
                  <p className="current-info">Current Email: {student.email}</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>@</CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder={student.email}
                      name="email"
                      value={email || student.email}
                      onChange={e =>onChange(e)}
                      autoComplete="email"
                      

                    />
                  </CInputGroup>
                  <p className="current-info">Current Phone: {student.phone}</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-phone" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="tel"
                      placeholder={student.phone}
                      name="phone"
                      value={phone}
                      onChange={e =>onChange(e)}
                      autoComplete="phone"
                      

                    />
                  </CInputGroup>
                  <p className="current-info">Current Email: {student.school}</p>

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
                      

                    > 
                      <option key='select' value='select school'>Select School</option>
                      {schools.schools.map(school => <option key={school.id} value={school.id}>{school.name}</option>)}
                      </select>               
                  </CInputGroup>
                  <p className="current-info">Current Grade: {student.grade}</p>
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
                      

                    >
                      {grades.map(grade => <option key={grade} value={grade}>{grade}</option>)}
                      </select>
                  </CInputGroup>
                  <p className="current-info">Current Shirt Size: {student.shirt_size}</p>

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
                      

                    >
                     {sizes.map(size => <option key={size} value={size}>{size}</option>)}

                      </select>
                  </CInputGroup>
                  <p className="current-info">Current Teachers Name: {student.teacher}</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                        <CIcon name="cil-user" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput
                      type="text"
                      placeholder={student.teacher}
                      name="teacher"
                      value={teacher}
                      onChange={e =>onChange(e)}
                      autoComplete="teacher"
                      

                    />
                  </CInputGroup>

                  <CButton type="submit" color="success" block>
                    Update
                  </CButton>
                </CForm>
              </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )

}
ManageSingleStudent.propTypes = {
  getAllSchools: PropTypes.func.isRequired,
  updateStudent: PropTypes.func.isRequired,
  getStudent: PropTypes.func.isRequired,
  students: PropTypes.object,


}

const mapStateToProps = (state)=> ({
  student: state.students,
  schools: state.schools

})


export default connect(mapStateToProps, {setAlert, updateStudent, getStudent, getAllSchools})(ManageSingleStudent); 