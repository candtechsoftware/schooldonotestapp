import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CButton,
  CDataTable,
  CFormGroup,
  CLabel,
  CForm,
  CInput,
  CFormText
} from '@coreui/react'
import Spinner from '../../student/Dashboard/Spinner';
import { getAllSchools, archiveSchool, addSchool } from '../../../../redux/schools/schools.action';


const Schools = ({getAllSchools, archiveSchool, addSchool , schools: {loading, schools}}) => {
  useEffect(()=>{
    getAllSchools();
  },[getAllSchools])

  const [formData, setFormData] = useState({
    name: "",
  })

  const { name } = formData;
  
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});
  const onSubmit = async e => {
    e.preventDefault();
    console.log(formData);
    addSchool(formData);
  }
  const fields = [
    {key: 'name',label: "School", _style: { width: '10%'}},
    {key: 'Archive', label: '', _style: { width: '1%'}, sorter: false, filter: false }
  ]
  return loading ? (<Spinner/>) 
    :
  (
    <>
   <CCard>
   <CCardHeader>
      Add School
    </CCardHeader>
    <CCardBody>

    <CRow>
    <CCol sm="12">
      <CForm onSubmit={e=> onSubmit(e)}>
        <CFormGroup>
          <CLabel htmlFor="nf-email">Email</CLabel>
          <CInput
            type="text"
            name="name"
            value={name}
            onChange={e => onChange(e)}
            placeholder="Enter School Name."
            required
          />
          <CFormText className="help-block">Please enter school name </CFormText>
        </CFormGroup>
        <CButton type="submit" color="success" block>
                    Add School
          </CButton>
      </CForm>
    </CCol>
  </CRow>
  </CCardBody>
  </CCard>
    <CRow>
      <CCol >
         
        <CCard>
          <CCardHeader>
           Schools 
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={schools}
              fields={fields}
              columnFilter
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
                        archiveSchool(item.id)
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
    </>
  )
}

Schools.propTypes = {
  getAllSchools: PropTypes.func.isRequired,
  archiveSchool: PropTypes.func.isRequired,
  addSchool: PropTypes.func.isRequired,
  schools: PropTypes.object 
}

const mapStateToProps = state => ({
  schools: state.schools
})

export default connect(mapStateToProps,{getAllSchools, addSchool , archiveSchool})(Schools);