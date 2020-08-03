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


const AdminDonations = ({ getAllDonations, donation: {donations, loading } }) => {
    useEffect(() => {
        getAllDonations();
    },[getAllDonations]);


    let donationsList = [];
    
    let total = 0; 
    if (Array.isArray(donations) && donations){
        for (let i = 0; i < donations.length; i++){
            total += donations[i].amount;
          
            let formatted = {
            School: `${donations[i].school.name}` || '',
            Total: `$${donations[i].amount}` || '',
            }
            donationsList.push(formatted)
        }
    }



   const fields = [
       {key: 'School',  _style: { width: '20%'}},
       {key: 'Total',  _style: { width: '10%'}},
   ]
   
   return loading ?
   (<Spinner/>)
   :
   (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>
              <h1>Donations Total: {new Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD"
                      }).format(total)}
                      </h1>
            </CCardHeader>
            <CCardBody>
                <CDataTable 
                items={donationsList}
                fields={fields }
                sorter
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
