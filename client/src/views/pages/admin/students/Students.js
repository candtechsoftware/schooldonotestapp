import React, { useEffect } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CDataTable
} from '@coreui/react'
import Spinner from '../../student/Dashboard/Spinner';
import { getAllStudents, archiveStudent } from '../../../../redux/students/student.actions';


const Students = ({getAllStudents, archiveStudent, students: {loading, students}}) => {
  useEffect(()=>{
    getAllStudents();
  },[getAllStudents])



  const fields = [
    {key: 'Student', _style: { width: '1%'}},
    {key: 'School', _style: { width: '1%'}},
    {key: 'grade', label: 'Grade', _style: { width: '1%'}, sorter: false, filter: false },
    {key: 'teacher', label: 'Teacher', _style: { width: '1%'}, sorter: false, filter: false },
  {key: 'shirt_size', label: 'Shirt Size', _style: { width: '1%'}, sorter: false, filter: false },
    {key: 'Archive', label: '', _style: { width: '1%'}, sorter: false, filter: false }
  ]

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
            <CDataTable
              items={students}
              fields={fields}
              columnFilter
              tableFilter
              sorter
              pagination
              itemsPerPageSelect
              itemsPerPage={10}
              scopedSlots= {{
                'Archive':
                (item, index)=> {
                  return (
                    <td className='py-2'>
                    <CButton
                      onClick={()=> {
                        console.log(item.id)
                        archiveStudent(item.id)
                      }}
                      color='danger'
                    >Archive</CButton>
                    </td>
                  )}
              }}
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

Students.propTypes = {
  getAllStudents: PropTypes.func.isRequired,
  archiveStudent: PropTypes.func.isRequired,
  students: PropTypes.object 
}

const mapStateToProps = state => ({
  students: state.students
})

export default connect(mapStateToProps,{getAllStudents, archiveStudent})(Students);
