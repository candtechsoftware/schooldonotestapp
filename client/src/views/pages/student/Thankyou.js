import React from "react";
import {
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
 
  CRow,
} from "@coreui/react";

const ThankYou = () => {

  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="8">
              <CCard className="p-4">
                <CCardBody>
                   <h2>Thank You Donating</h2>
                </CCardBody>
              </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};


export default ThankYou;
