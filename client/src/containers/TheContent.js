import React, { Suspense } from 'react';

import AdminRoutes from '../routing/AdminRoutes';
import StudentRoute from '../routing/StudentRoutes';
import StudentDashboard from '../views/pages/student/Dashboard/StudentDashboard';

import {
  Redirect,
  Switch,
} from 'react-router-dom'
import { CContainer } from '@coreui/react'
import { connect } from 'react-redux'; 
import PropTypes from 'prop-types';
import Dashboard from '../views/dashboard/Dashboard';
import AdminDonations from '../views/pages/admin/dashboard/AdminDashboard';
import Schools from '../views/pages/admin/schools/Schools';
import Students from '../views/pages/admin/students/Students';

const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>
)

// Loading Logged in user

const TheContent = ({user: {isAuthenticated, isAdmin}}) => {
    if (isAdmin && isAuthenticated ){ return (
    <main className="c-main">
      <CContainer fluid>
          <Switch>
              <AdminRoutes exact path='/dashboard' component={AdminDonations}/>
              <AdminRoutes exact path='/admin/schools' component={Schools}/>
              <AdminRoutes exact path='/admin/students' component={Students}/>
    
          </Switch>
      </CContainer>
    </main>
  )} else if (!isAdmin && isAuthenticated ) {
    return (
      <main className="c-main">
            <Switch>
                {!isAdmin ? <StudentRoute exact path='/students' component={StudentDashboard}/>: <Redirect to='/dashboard'/>}
            </Switch>
      </main>
      
    )} else {
    return <Redirect to='/login'/>
  }
}
TheContent.propTypes = {
  user: PropTypes.object.isRequired,
}

const mapStateToProps = state => ({ 
  user: state.user
})
const ContentComponent = React.memo(TheContent)



export default connect(mapStateToProps)(ContentComponent)
