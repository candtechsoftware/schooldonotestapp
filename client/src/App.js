import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// Pages
import StudentLogin from './views/pages/student/Login';
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
import store from './store';
const loading = (
  <div className="pt-3 text-center">
    <div className="sk-spinner sk-spinner-pulse"></div>
  </div>

// Containers
)

if (localStorage.token) {
  setAuthtoken(localStorage.token) 


}
const App = () =>{
  useEffect(() => {
    store.dispatch(loadStudent())
  },[])
  return (
      <BrowserRouter>
            <Alert/>
            <Switch>
              <Route exact path="/login" name="Login Page" render={props => <StudentLogin {...props}/>} />
              <Route exact path="/admin/login" name="Login Page" render={props => <AdminLogin {...props}/>} />
              <Route exact path="/search" name="Student Lookup Page" render={props => <StudentLookup {...props}/>} />
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
