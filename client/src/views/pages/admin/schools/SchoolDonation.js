import React, {useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDonationsGroupedBySchool } from "../../../../redux/donations/donation.actions";
import {Link} from 'react-router-dom';
import {
  CCardBody,
  CCardHeader,
  CDataTable,
  CCol,
  CRow,
  CCard,
  CButton
} from "@coreui/react";
import Spinner from '../../student/Dashboard/Spinner'
const SchoolDonation = ({
  getDonationsGroupedBySchool,
  donation: { donations, loading }
}) => {
  useEffect(() => {
    getDonationsGroupedBySchool();
  }, [getDonationsGroupedBySchool]);

  let donationsList = [];

  let total = 0;
  if (Array.isArray(donations)) {
    for (let i = 0; i < donations.length; i++) {
        donations[i].total_amount = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(donations[i].total_amount)
    }
  }

  const fields = [
    { key: "school",label: "School", _style: { width: "1%" } },
    { key: "total_amount", label: "Total Amount", _style: { width: "1%" } },
    {
      key: 'see_school',
      label: '',
      _style: { width: '1%' },
      sorter: false,
      filter: false
    }

  ];

  return loading ? (
    <Spinner />
  ) : (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader>Donations Total By School: ${total}</CCardHeader>
            <CCardBody>
              <CDataTable
                items={donations}
                fields={fields}
                sorter
                pagination
                columnFilter

                itemsPerPage={10}
                scopedSlots={{
                  'see_school': (item, index) => {
                    return (
                      <td className="py-2">


                        <Link
              to={`/admin/schools/donations/${item.school_id}`}
            >
            <CButton color="primary">See More</CButton>
              </Link>
                      </td>
                      ) 
                  }

                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

SchoolDonation.propTypes = {
    getDonationsGroupedBySchool: PropTypes.func.isRequired,
    donation: PropTypes.object
}

const mapStateToProps = state => ({
  donation: state.donation
})

export default connect(mapStateToProps, {getDonationsGroupedBySchool})(SchoolDonation);
