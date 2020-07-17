import React, { useEffect } from 'react'
import { CDataTable, CCol } from '@coreui/react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loadDonationByStudent } from '../../../../redux/donations/donation.actions';
import Spinner from './Spinner'

const StudentChart = ({loadDonationByStudent, donation: {donations , loading}}) => {
  useEffect(() => {
    loadDonationByStudent();
  },[loadDonationByStudent])
  const usersData = [

  ]
  if(Array.isArray(donations)){
    for (let i = 0; i < donations.length; i++){
    donations[i].created_at = donations[i].created_at.slice(0,10);
    donations[i].amount = `$${donations[i].amount}`
 
    usersData.push(donations[i])}
  }


  console.log("data", usersData)

  const fields = [
    { key: 'amount', _style: { width: '30%'} },

    { key: 'created_at', _style: { width: '40%'} },
  ]
  // render
  return loading ? (<Spinner/>): (<>
      <CCol sm="5">
         <h5 id="traffic" className="card-title mb-0">Total: ${
          usersData.reduce((acc, item) => {
            console.log('in reduxce', item.amount)
            return acc + parseFloat(item.amount.replace('$',''))}, 0)}
            </h5>
      </CCol>
    <CDataTable
     
      items={usersData}
      fields={fields}
      sorter
      pagination
      itemsPerPageSelect
      itemsPerPage={10}
 
    /></>
  )
}

StudentChart.propTypes = {
  loadDonationByStudent: PropTypes.func.isRequired,
  donation: PropTypes.object
}

const mapStateToProps = state => ({
  donation: state.donation
})
export default connect(mapStateToProps ,{ loadDonationByStudent })(StudentChart);
