import React, { useState } from "react";
import StudentItem from "./StudentItem";
import { connect } from "react-redux";
import { getAllStudents } from "../../../redux/students/student.actions";
import { getAllStudentsFilter } from "../../../redux/students/student.actions";
import PropTypes from "prop-types";
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
} from "@coreui/react";

import CIcon from "@coreui/icons-react";

const StudentLookup = ({ getAllStudents,getAllStudentsFilter, students: { loading, students } }) => {

  const [searchData, setSearchData] = useState({
    searchBar: ""
  });

  const { searchBar } = searchData;

  const onChange = e => {
    setSearchData({ ...searchData, [e.target.name]: e.target.value });
    console.log("Search bar ", searchBar);
    getAllStudentsFilter(e.target.value.toLowerCase());
  };
  console.log("students: ", students);
  return (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md="9" lg="7" xl="9">
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
                    <CInput
                      type="text"
                      placeholder="Find student"
                      autoComplete="new-password"
                      value={searchBar}
                      name="searchBar"
                      onChange={e => onChange(e)}
                    />
                  </CInputGroup>
                  <CButton color="success" block>
                    Search
                  </CButton>
                </CForm>
              </CCardBody>
            </CCard>
            {!loading ? (
              <CCard className="mx-4">
                <CCardBody className="p-4">
                  <h2>Search Results: </h2>
                  <CContainer fluid>
                    {students.map(student => (
                        <StudentItem
                          name={student.Student}
                          schoolId={student.student_school_id}
                          id={student.id}
                          key={student.id}
                        />
                    ))}
                    </CContainer>
                </CCardBody>
              </CCard>
            ) : (
              ""
            )}
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};
StudentLookup.propTypes = {
  getAllStudents: PropTypes.func.isRequired,
  getAllStudentsFilter: PropTypes.func,
  students: PropTypes.object
};

const mapStateToProps = state => ({
  students: state.students
});
export default connect(mapStateToProps, { getAllStudents, getAllStudentsFilter })(StudentLookup);
