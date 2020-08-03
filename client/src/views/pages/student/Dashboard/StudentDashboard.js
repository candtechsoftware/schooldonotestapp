import React from 'react'
import {
  CCard,
  CCardBody,
  CCardFooter,
  CCol,
  CRow,
} from '@coreui/react'

import StudentChart from './StudentDonationChart';


const StudentDashboard = () => {
  return (
    <>
      <CCard>
        <CCardBody>

          <StudentChart style={{height: '300px', marginTop: '40px'}}/>
        </CCardBody>
        <CCardFooter>
          <CRow className="text-center">
            <CCol md sm="12" className="mb-sm-2 mb-0">
            </CCol>
          </CRow>
        </CCardFooter>
      </CCard>


    </>
  )
}

export default StudentDashboard
