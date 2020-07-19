import React, { useState, useEffect } from 'react'
import { useHistory, useLocation } from 'react-router-dom'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CDataTable,
  CRow,
  CPagination
} from '@coreui/react'


const Schools = () => {

  return (
    <CRow>
      <CCol xl={6}>
        <CCard>
          <CCardHeader>
            Schools
          </CCardHeader>
          <CCardBody>
            
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Schools;

