import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
const TheLayout = React.lazy(() => import('./containers/TheLayout'));

// Pages
const StudentLogin = React.lazy(() => import('./views/pages/student/Login'));
const AdminLogin = React.lazy(() => import('./views/pages/admin/Login'));
const Register = React.lazy(() => import('./views/pages/student/Register'));
const StudentLookup = React.lazy(()=> import('./views/pages/student/Student.js'));
const Page404 = React.lazy(() => import('./views/pages/page404/Page404'));
const Page500 = React.lazy(() => import('./views/pages/page500/Page500'));

if (localStorage.token) {
  setAuthtoken(localStorage.token) 


}
const App = () =>{
  useEffect(() => {
    store.dispatch(loadStudent())
  },[])
  return (
      <BrowserRouter>
          <React.Suspense fallback={loading}>
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
          </React.Suspense>
      </BrowserRouter>
    

)}

const mapStateToProps = state => ({
  currentUser: state.user.currentUser
})

export default connect(mapStateToProps)(App);
