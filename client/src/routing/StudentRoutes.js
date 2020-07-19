import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const StudentRoute = ({
  component: Component,
  user: {isAuthenticated, isAdmin},
  ...rest

}) => {
  return isAdmin && isAuthenticated ? 
  <Redirect to='/dashboard'/>
    :  (
 <Route
  {...rest} 
  render={props => 
    isAuthenticated && !isAdmin ?
      (<Component {...props} />) :
      (<Redirect to='/admin/login'/>
    )}
  />
);}

StudentRoute.propTypes = { 
  user: PropTypes.object.isRequired
 };


 const mapStateToProps = state => ({
  user: state.user,
 });

 export default connect(mapStateToProps)(StudentRoute);