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
    if (Array.isArray(donations)){
        for (let i = 0; i < donations.length; i++){
            total += donations[i].amount;
            let formatted = {
            Amount: `$${donations[i].amount}`,
            Student: `${donations[i].student.first_name} ${donations[i].student.last_name}`,
            School: `${donations[i].school.name}`,
            Date:  donations[i].created_at.slice(0,10),
            }
            donationsList.push(formatted)
        }
    }

   const fields = [
       {key: 'Amount',  _style: { width: '10%'}},
       {key: 'School',  _style: { width: '20%'}},
       {key: 'Student',  _style: { width: '20%'}},
       {key: 'Date',  _style: { width: '20%'}},
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
              Donations Total: ${total}
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
