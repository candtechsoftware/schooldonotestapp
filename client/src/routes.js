import React from 'react';
const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'));
const Users = React.lazy(() => import('./views/users/Users'));
const StudentDashboard = React.lazy(() => import('./views/pages/student/Dashboard/StudentDashboard'));
 
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/schools', exact: true,  name: 'Users', component: Users },
  { path: '/students', exact: true, name: 'My Donations', component: StudentDashboard}
];

export default routes;
