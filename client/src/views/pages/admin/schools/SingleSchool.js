import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from 'react-redux';
import { CCard, CRow, CCardHeader, CDataTable, CCardBody, CCol
} from "@coreui/react";
import { getDonationsBySchoolId } from '../../../../redux/donations/donation.actions';
const SingleSchool = ({getDonationsBySchoolId, donation: {donations , loading }, match}) => {
  useEffect(()=>{
    getDonationsBySchoolId(match.params.id)
  },[getDonationsBySchoolId, match.params.id])

  console.log(donations);

  const fields = [
    {key: 'student',label: 'Student', _style: { width: '1%'}},
    {key: 'amount',label: 'Amount', _style: { width: '1%'}},
  ]

  const getTotal = ()=>{
    let sum = 0.0;
    let count = 0;
  for (let dono of donations){
    let amount;
    if ((typeof dono.amount) == typeof "" ){
       amount = dono.amount.replace("$", "");
       amount = amount.replace(",","");
    }
    sum += parseFloat(amount);   
    console.log(count)
  }
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(sum); 
}
  getTotal();


  return (
    <>

    <CRow>
      <CCol >
         
        <CCard>
          <CCardHeader>
          <h2>{donations[0].school }</h2>
            <h5>Total: {getTotal()}</h5>
          </CCardHeader>
          <CCardBody>
            <CDataTable
              items={donations}
              fields={fields}
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


SingleSchool.propTypes = {
  getDonationsBySchoolId: PropTypes.func.isRequired 
}

const mapStateToProps = state => ({
  donation: state.donation
})
export default connect(mapStateToProps ,{getDonationsBySchoolId})(SingleSchool); 
