import React, {useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getDonationsGroupedByStudent } from "../../../../redux/donations/donation.actions";
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
const StudentDonations = ({
  getDonationsGroupedByStudent,
  donation: { donations, loading }
}) => {
  useEffect(() => {
    getDonationsGroupedByStudent();
  }, [getDonationsGroupedByStudent]);

  let donationsList = [];

  let total = 0;
  if (Array.isArray(donations)) {
    for (let i = 0; i < donations.length; i++) {
        donations[i].total_sum = new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD"
        }).format(donations[i].total_sum)
    }
  }

  const fields = [
    { key: "student",label: "Student", _style: { width: "1%" } },
    { key: "total_sum", label: "Total Amount", _style: { width: "1%" } },
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
            <CCardHeader><h3>Donations Total Grouped By Student</h3></CCardHeader>
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
              to={`/admin/students/donations/${item.student_id}`}
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

StudentDonations.propTypes = {
    getDonationsGroupedByStudent: PropTypes.func.isRequired,
    donation: PropTypes.object
}

const mapStateToProps = state => ({
  donation: state.donation
})

export default connect(mapStateToProps, {getDonationsGroupedByStudent})(StudentDonations);
