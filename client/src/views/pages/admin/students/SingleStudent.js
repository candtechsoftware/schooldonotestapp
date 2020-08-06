import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { CCard, CRow, CCardHeader, CDataTable, CCardBody, CCol
} from "@coreui/react";
import { getDonationsByStudentId } from '../../../../redux/donations/donation.actions';
const SingleStudent = ({getDonationsByStudentId, donation: {donations , loading }, match}) => {
  useEffect(()=>{
    getDonationsByStudentId(match.params.id)
  },[getDonationsByStudentId, match.params.id])

  console.log("In component ", donations);

  let donationaList = [];
  let sum = 0;
  for (let dono of donations) {
    let formatted = {
        Student: `${dono.student.first_name} ${dono.student.last_name}`, 
        Amount: new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(dono.amount),
        Date: dono.created_at ,
    }
    sum += parseFloat(dono.amount);
    donationaList.push(formatted);
  }
  return (
    <>

    <CRow>
      <CCol >
         
        <CCard>
          <CCardHeader>
            <h2>{`${donations[0].student.first_name} ${donations[0].student.last_name}`}</h2>
            <h5>Total: {new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(sum)}</h5>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={donationaList}
              // fields={}
              columnFilter
              sorter
              pagination
              itemsPerPageSelect
              itemsPerPage={10}
            
            />
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
    </>
  );
};


SingleStudent.propTypes = {
  getDonationsByStudentId: PropTypes.func.isRequired 
}

const mapStateToProps = state => ({
  donation: state.donation
})
export default connect(mapStateToProps ,{getDonationsByStudentId})(SingleStudent); 
