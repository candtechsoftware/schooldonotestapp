import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import StudentLogin from './views/pages/student/Login';
import SingleStudent from './views/pages/student/donation/SingleStudent';
import ForgotPassword from './views/pages/student/ForgotPassowd';
import ResetPassword from './views/pages/student/ResetPassword';
import AdminLogin from './views/pages/admin/Login';
import Register from './views/pages/student/Register';
import StudentLookup from './views/pages/student/Student.js';
import Page404 from './views/pages/page404/Page404';
import Page500 from './views/pages/page500/Page500';
import TheLayout from './containers/TheLayout';

import './scss/style.scss';
import Alert from './views/notifications/alerts/Alerts';
import { connect } from 'react-redux'; 
import { loadStudent } from './redux/user/user.actions';
import setAuthtoken from './utils/authHeader';
import {store} from './store';



if (localStorage.token) {
  setAuthtoken(localStorage.token) 


}
const App = () =>{
  useEffect(() => {
    store.dispatch(loadStudent())
  },[])
  return (
      <BrowserRouter >
            <Alert/>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <StudentLogin {...props}/>} />
              <Route exact path="/forgot-password" name="Forgot Passowrd Page" render={props => <ForgotPassword {...props}/>} />
              <Route exact path="/reset-password/:token" name="Reset Passowrd Page" render={props => <ResetPassword {...props}/>} />

              <Route exact path="/admin/login" name="Login Page" render={props => <AdminLogin {...props}/>} />
              <Route exact path="/search" name="Student Lookup Page" render={props => <StudentLookup {...props}/>} />
              <Route exact path="/student/:id" name="Student Donation Page" render={props => <SingleStudent {...props}/>} />
              <Route exact path="/register" name="Register Page" render={props => <Register {...props}/>} />
              <Route exact path="/404" name="Page 404" render={props => <Page404 {...props}/>} />
              <Route exact path="/500" name="Page 500" render={props => <Page500 {...props}/>} />
              <Route path="/" name="Home" render={props => <TheLayout {...props}/>} />
            </Switch>
      </BrowserRouter>
    

)}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
