import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getAllDonations } from '../../../../redux/donations/donation.actions';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CDataTable,
  CCol,
  CRow,
} from '@coreui/react'

import Spinner from '../../student/Dashboard/Spinner';
import { get } from 'request';


const AdminDonations = ({ getAllDonations, donation: {donations, loading } }) => {
    useEffect(() => {
        getAllDonations();
    },[getAllDonations]);


    
   const getTotal = () => {
    let sum = 0.0;
    let count = 0;
    if (Array.isArray(donations)){
    for (let dono of donations) {
      let amount;
      if ((typeof dono.amount) == typeof "" ){
         amount = dono.amount.replace("$", "");
         amount = amount.replace(",","");
      }
      sum += parseFloat(amount);   
      console.log(amount)

    }}

    return  new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD"
    }).format(sum);  

   }


   const fields = [
       {key: 'school' , label:'School',  _style: { width: '20%'}},
       {key: 'student' , label:'Student',  _style: { width: '20%'}},

       {key: 'amount', label: 'Total',  _style: { width: '10%'}},
   ]
   getTotal();

   return loading ?
   (<Spinner/>)
   :
   (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h1>Donations Total: {getTotal()}
                      </h1>
            </CCardHeader>
            <CCardBody>
                <CDataTable 
                items={donations}
                fields={fields }
                sorter
                columnFilter
                pagination
                itemsPerPage={10}
                />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}
AdminDonations.propTypes = {
    getAllDonations: PropTypes.func.isRequired,
    donation: PropTypes.object

}

const mapStateToProps = state => ({
    donation: state.donation
})
export default connect(mapStateToProps, { getAllDonations })(AdminDonations);
