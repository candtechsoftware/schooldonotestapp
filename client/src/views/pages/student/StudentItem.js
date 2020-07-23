import React from "react";
import PropTypes from "prop-types";
import { CCard, CContainer, CRow, CButton, CCardHeader, CCardBody } from "@coreui/react";
import {Link} from "react-router-dom";

const StudentItem = ({name, schoolId, id}) => {
  return (
    <>
        <CCard>
          <CRow className="student-row">
            <CCardHeader>{name} - Id: {schoolId}</CCardHeader>
            <Link
              to={`student/${id}`}
            >
            <CButton>Donate</CButton>
              </Link>
          </CRow>
        </CCard>
    </>
  );
};

export default StudentItem; 
