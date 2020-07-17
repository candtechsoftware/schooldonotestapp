import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const AdminRoute = ({
  component: Component,
  user: {isAuthenticated, isAdmin},
  ...rest

}) => {
console.log('admin routes')
return (
 <Route
  {...rest} 
  render={props => 
    isAuthenticated && isAdmin ?
      (<Component {...props} />) :
      (<Redirect to='/admin/login'/>
    )}
  />
);}

AdminRoute.propTypes = { 
  user: PropTypes.object.isRequired
 };


 const mapStateToProps = state => ({
  user: state.user,
 });

 export default connect(mapStateToProps)(AdminRoute);