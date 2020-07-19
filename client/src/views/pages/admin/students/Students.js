import React, { useEffect, Fragment } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton
} from '@coreui/react'
import Spinner from '../../student/Dashboard/Spinner';
import { getAllStudents } from '../../../../redux/students/student.actions';


const Students = ({getAllStudents, students: {loading, students}}) => {
  useEffect(()=>{
    getAllStudents();
  },[getAllStudents])

  console.log(loading );
  console.log(students);

  return loading ? (<Spinner/>) 
    :
  (
    <CRow>
      <CCol >
      
        <CCard>
          <CCardHeader>
           Students 
          </CCardHeader>
          <CCardBody>
            <table className="table table-stiped table-hover">
              <tr>
                <th>Student</th>
                <th>School</th>
              </tr>
           {students.map(student => (
             <Fragment>
               <tr>
             <td>{student.first_name} {student.last_name}</td>
             <td>{student.school.name}</td>
             <td><CButton type="submit" color="danger" className="px-4">Archive</CButton></td>
             </tr>
             </Fragment>
           ))}
           </table>
           
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

Students.propTypes = {
  getAllStudents: PropTypes.func.isRequired,
  students: PropTypes.object 
}

const mapStateToProps = state => ({
  students: state.students
})

export default connect(mapStateToProps,{getAllStudents})(Students);