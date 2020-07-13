import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivteRoute = ({ component: Component, auth, ...rest}) => (
  <Route  render={props => {
    if(!auth.isLoggedInStudent){
      return <Redirect to='login'/>
    } else {
      return <Component {...props} />
    }
  

  }}/> 
)

PrivteRoute.propTypes = {
  auth: PropTypes.object.isRequired,

}

const mapStateToProps = state => ({
  auth: state.studentAuth.isLoggedInStudent
})
export default connect(mapStateToProps)(PrivteRoute); 