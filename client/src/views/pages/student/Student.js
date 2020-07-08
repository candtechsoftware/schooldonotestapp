import React from 'react'
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
} from '@coreui/react';

import {connect} from 'react-redux';
import { setAlert } from '../../../actions/alert';
import CIcon from '@coreui/icons-react';

const StudentLookup = () => {
  // const 


  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="6">
            <CCard className="mx-4">
              <CCardBody className="p-4">
                <CForm>
                  <h1>Student Lookup</h1>
                  <p className="text-muted">Find Studnet By Name or By ID</p>

                  <CInputGroup className="mb-3">
                    <CInputGroupPrepend>
                      <CInputGroupText>
                      <CIcon name="cil-list" />
                      </CInputGroupText>
                    </CInputGroupPrepend>
                    <CInput type="text" placeholder="Find student" autoComplete="new-password" />
                  </CInputGroup>
                  <CButton color="success" block>Search</CButton>
                </CForm>
              </CCardBody>

            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default connect(null, { setAlert })(StudentLookup);
