import React, {useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loadSettings, updateSettings} from '../../../../redux/admin/admin.actions';
import { setAlert } from '../../../../redux/alert/alert.action';
import { registerAdmin } from '../../../../redux/user/user.actions';

import {
  CCard,
  CCardBody,
  CCardHeader,
  CForm,
  CButton,
  CInput,
  CCol,
  CCardGroup,
  CInputGroup,
  CInputGroupText,
  CRow,
  CInputGroupPrepend,
} from '@coreui/react'
import Spinner from '../../student/Dashboard/Spinner';
import CIcon from "@coreui/icons-react";


const AdminSettings = ({registerAdmin, updateSettings, loadSettings, settings, setAlert}) =>{
  useEffect(() => {
    loadSettings();
  }, [loadSettings])
  console.log('')
  
  const [formData, setFormData] = useState({
    fee: "",

  })
    
  const [NewAdminFormData, setNewAdminFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    first_name: "",
    last_name: "",
  })

  const {fee} = formData;
  const {
    email, 
    password, 
    confirmPassword,
    first_name,
    last_name
} = NewAdminFormData;
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onChangeAdmin = (e)=>{
    setNewAdminFormData({ ...NewAdminFormData, [e.target.name]: e.target.value })
  }
  const onSubmitAdmin = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword){
      setAlert('Passwords do not match', 'danger');
    } else {
      registerAdmin(NewAdminFormData);
  }
  }

  const onSubmit = async (e, id) => {
    e.preventDefault();
    if (!parseInt(fee)){
      setAlert("Invalid Type, Please enter a number", 'danger', 4000);
      console.log("should be number", fee)

    }else {
    updateSettings(settings.id, {value : fee})

  }
  };
  
  return false ?
      (<Spinner/>): (
        <>
          <CRow className="justify-content-center">
          <CCol md="8">
            <CCard className="p-4" >
              <CCardHeader>
                <h2>Settings</h2>
                <CCardBody>

                          <div className="container" key={settings.id} >
                          <CForm onSubmit={(e) => onSubmit(e, settings.id)} key={settings.id}>
                          <div className="column-left">{settings.setting}</div>
                           
                           <div className="column-center">
                           {settings.value}%
                            <CInput
                              className="settingInput"
                              key={settings.id}
                              type='text'
                              placeholder={`${settings.value}%`}
                              name={settings.setting}
                              onChange={(e) => onChange(e)}

                            />
                            </div>
                            <div className="column-right">
                            <CButton color = 'primary' type = 'submit'>
                               Update
                             </CButton>
                            </div>



                             </CForm>
                             </div>
                        
                 
                      

                </CCardBody>
              </CCardHeader>
   
            </CCard>
            </CCol>
        </CRow>
            <CRow className="justify-content-center">
          <CCol md="8">
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm onSubmit={(e) => onSubmitAdmin(e)}>
                    <h2>Create An Admin Account </h2>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="First name"
                        name="first_name"
                        value={first_name}
                        onChange={(e) => onChangeAdmin(e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="Last name"
                        name="last_name"
                        value={last_name}
                        onChange={(e) => onChangeAdmin(e)}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-user" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="text"
                        placeholder="email"
                        name="email"
                        value={email}
                        onChange={(e) => onChangeAdmin(e)}
                        autoComplete="email"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Password"
                        name="password"
                        value={password}
                        onChange={(e) => onChangeAdmin(e)}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupPrepend>
                        <CInputGroupText>
                          <CIcon name="cil-lock-locked" />
                        </CInputGroupText>
                      </CInputGroupPrepend>
                      <CInput
                        type="password"
                        placeholder="Confirm Password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={(e) => onChangeAdmin(e)}
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs="6">
                        <CButton type="submit" color="success" className="px-4">
                          Login
                        </CButton>
                      </CCol>
             
                    </CRow>
                  </CForm>
                  </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
    
        </>
      )
  
}

AdminSettings.propTypes = {
  registerAdmin: PropTypes.func,
  loadSettings: PropTypes.func,
  updateSettings: PropTypes.func, 
  setAlert: PropTypes.func, 
  settings: PropTypes.object
}

const mapStateToProps = state =>({
  settings: state.admin.settings,
  loading: state.admin.loading
})

export default connect(mapStateToProps, {loadSettings, updateSettings, setAlert, registerAdmin})(AdminSettings);