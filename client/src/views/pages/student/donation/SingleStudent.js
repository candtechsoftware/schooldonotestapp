import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../Dashboard/Spinner";
import {
  CCard,
  CContainer,
  CRow,
  CCol,
  CButton,
  CLabel,
  CCardHeader,
  CCardBody,
  CForm,
  CInput,
  CInputGroup,
  CInputGroupPrepend,
  CInputGroupText,
} from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { getStudent } from "../../../../redux/students/student.actions";
import { addDonation } from "../../../../redux/donations/donation.actions";
import PaypalExpressBtn from './PaypalBtn';

import { Link } from "react-router-dom";


const SingleStudent = ({
  addDonation,
  getStudent,
  student: { student, loading },
  match
}) => {
  useEffect(() => {
    getStudent(match.params.id);
  }, [getStudent]);

  const convienceFee = .04; 
  const [ amount, setAmount ] = useState(0); 
  let fee = amount * convienceFee;
  let total = fee + parseFloat(amount); 

  let donationData = {}
  const onChange = e => {
    setAmount(e.target.value);
    fee = amount * convienceFee;
    total = fee + amount; 

  }

  const onSubmit = async (e) => {
    e.preventDefault();
    donationData.amount = total;
    donationData.student_id = student.id;
    donationData.school_id = student.school_id;
    console.log(donationData)
   // addDonation(donationData);
  }

  const paymentHandler = (details, data) => {
    console.log('details', details);
    console.log('data ', data );
  }
  return (loading || student == null ? (
    <div className="c-app c-default-layout flex-row align-items-center">
      <Spinner />
    </div>
  ) : (
    <div className="c-app c-default-layout flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCard>
            <CRow className="single-student-donation" >
              <CCardBody>
              <CCardHeader>
                <h1>{student.name} </h1>
                <h5>ID: {student.student_school_id} Grade: {student.grade}</h5>
                <h5>Grade: {student.grad}</h5>
                <h5>School: {student.school} </h5>
                <h5>Shirt Size: {student.shirt_size} </h5>
              </CCardHeader>
                <p>Choose An Amount to Donate. (a small convenience fee will be added to cover this transaction)</p>
                  <CForm onSubmit={(e) => onSubmit(e)}>
                    <CLabel><strong>Donation Amount</strong> </CLabel>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Donation Amount"
                        name="amount"
                        value={(amount)}
                        onChange={e => onChange(e)}
                      />
                    </CInputGroup>

                    <CLabel><strong>Convenience Fee</strong> </CLabel>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Convenience Fee"
                        name="fee"
                         value={new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).format(fee)}
                        onChange={e => onChange(e)}
                        disabled
                      />
                    </CInputGroup>
                    <CLabel><strong>Total Amount</strong> </CLabel>
                     <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Total"
                        name="total"
                        value={new Intl.NumberFormat('en-US', {style: 'currency', currency: "USD"}).format(total)}
                        onChange={e => onChange(e)}
                        disabled
                      />
                    </CInputGroup>                   <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="success" className="px-4">
                            Dontate 
                        </CButton>

                      </CCol>
                      <CCol xs="6" className="text-right">
                        <Link
                          to="/search">
                        <CButton color="success">Back To Search</CButton>
                          </Link>
                      </CCol>
                    </CRow>
                  </CForm>
 
              </CCardBody>
            </CRow>
          </CCard>
        </CRow>
      </CContainer>
    </div>
  ))
};

SingleStudent.propTypes = {
  addDonation: PropTypes.func.isRequired,
  getStudent: PropTypes.func.isRequired,
  student: PropTypes.object
};

const mapStateToProps = state => ({
  student: state.students
});
export default connect(mapStateToProps, { getStudent, addDonation })(SingleStudent);
