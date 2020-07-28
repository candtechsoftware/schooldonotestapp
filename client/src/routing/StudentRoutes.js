import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../views/pages/student/Dashboard/Spinner';

const StudentRoute = ({
  component: Component,
  user: {isAuthenticated, isAdmin, loading},
  ...rest

}) => {
  return <Route
    {...rest}
    render={props => 
      loading ? (<Spinner/>) : isAuthenticated && !isAdmin ? (
        <Component {...props}/>
      ): (
        <Redirect to="login"/>
      )
    }
    />  
}

StudentRoute.propTypes = { 
  user: PropTypes.object.isRequired
 };


 const mapStateToProps = state => ({
  user: state.user,
 });

 export default connect(mapStateToProps)(StudentRoute);