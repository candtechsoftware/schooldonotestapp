import React from 'react';
const Dashboard = React.lazy(() => import('../views/dashboard/Dashboard'));
const Users = React.lazy(() => import('../views/users/Users'));
 
const adminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/schools', exact: true,  name: 'Schools', component: Users },
  { path: '/admin/students', exact: true, name: 'All Students', component: Users}
];

export default adminRoutes;
