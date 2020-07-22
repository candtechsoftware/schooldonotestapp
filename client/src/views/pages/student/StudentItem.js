import React from "react";
import PropTypes from "prop-types";
import { CCard, CContainer, CRow, CButton, CCardHeader, CCardBody } from "@coreui/react";

const StudentItem = ({name, schoolId, id}) => {
  return (
    <>
      <CContainer fluid>
        <CRow>
          <CCard>
            <CCardHeader>{name} - Id: {schoolId}</CCardHeader>
          </CCard>
          </CRow>
      </CContainer>
    </>
  );
};

export default StudentItem; 
