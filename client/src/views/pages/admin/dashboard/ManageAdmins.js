import React, {useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {
  CCardBody,
  CCardHeader,
  CDataTable,
  CCol,
  CRow,
  CCard,
  CButton
} from "@coreui/react";
import Spinner from '../../student/Dashboard/Spinner';
import { getAllAdmins, archiveAdmin } from '../../../../redux/admin/admin.actions';
const ManageAdmins = ({getAllAdmins, archiveAdmin, admin: {admins, loading}}) => {
  useEffect(() => {
    getAllAdmins();
  }, [getAllAdmins]);


  const fields = [
    {key: 'first_name',label: "First Name", _style: { width: '10%'}},
    {key: 'last_name',label: "Last Name", _style: { width: '10%'}},
    {key: 'email',label: "Email", _style: { width: '10%'}},
    {key: 'Archive', label: '', _style: { width: '1%'}, sorter: false, filter: false }
  ]

  return loading ? (
    <Spinner />
  ) : (
    <>
      <CRow>
        <CCol>
          <CCard>
            <CCardHeader><h3>Manage Admin Users</h3></CCardHeader>
            <CCardBody>
              <CDataTable
                items={admins}
                fields={fields}
                sorter
                pagination
                columnFilter

                itemsPerPage={10}
                scopedSlots= {{
                  'Archive':
                  (item, index)=> {
                    return (
                      <td className='py-2'>
                      <CButton
                        onClick={()=> {
                          archiveAdmin(item.id)
                        }}
                        color='danger'
                      >Archive</CButton>
                      </td>
                    )}
                }}
              />
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  );
};

ManageAdmins.propTypes = {
    getAllAdmins: PropTypes.func.isRequired,
    archiveAdmin: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  admin: state.admin
})

export default connect(mapStateToProps, {getAllAdmins, archiveAdmin})(ManageAdmins);
