import React, {useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
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
}) => {
  useEffect(() => {
  }, []);



  return false ? (
    <Spinner />
  ) : (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader><h3>Manage Donations</h3></CCardHeader>
            <CCardBody>
              <CDataTable
                items={[]}
                // fields={fields}
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
