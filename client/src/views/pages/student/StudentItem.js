import React from "react";
import PropTypes from "prop-types";
import { CCard, CContainer, CRow, CButton, CCardHeader, CCardBody, CCol } from "@coreui/react";
import {Link} from "react-router-dom";

const StudentItem = ({name, schoolId, id}) => {
  return (
    <>
        <CCard>
          
          <CRow className="student-row">
              <CCol>
                <h4>{name}</h4>
                <p>Id: {schoolId}</p>
                </CCol>
                <CCol>
              <Link
                to={`student/${id}`}
              > 
              <CButton color="primary" className="donation-btn">Donate</CButton>
              </Link>
              </CCol>
          </CRow>
        </CCard>
    </>
  );
};

export default StudentItem; 
