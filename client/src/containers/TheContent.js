import React from 'react';

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
import AdminDonations from '../views/pages/admin/dashboard/AdminDashboard';
import Schools from '../views/pages/admin/schools/Schools';
import SchoolDonation from '../views/pages/admin/schools/SchoolDonation';
import StudentDonations from '../views/pages/admin/students/StudentDonations';
import SingleSchool from '../views/pages/admin/schools/SingleSchool';
import SingleStudent from '../views/pages/admin/students/SingleStudent';

import Students from '../views/pages/admin/students/Students';


// Loading Logged in user

const TheContent = ({user: {isAuthenticated, isAdmin}}) => {
    if (isAdmin && isAuthenticated ){ return (
    <main className="c-main">
      <CContainer fluid>
          <Switch>
              <AdminRoutes exact path='/dashboard' component={AdminDonations}/>
              <AdminRoutes exact path='/admin/schools' component={Schools}/>
              <AdminRoutes exact path='/admin/schools/donations' component={SchoolDonation}/>
            <AdminRoutes exact path='/admin/schools/donations/:id' component={SingleSchool}/>
              <AdminRoutes exact path='/admin/students' component={Students}/>
              <AdminRoutes exact path='/admin/students/donations' component={StudentDonations}/>
            <AdminRoutes exact path='/admin/students/donations/:id' component={SingleStudent}/>
    
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
