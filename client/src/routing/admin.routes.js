import React from 'react';
import AdminDashBoard from '../views/pages/admin/dashboard/AdminDashboard';

const adminRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/admin/students', exact: true, name: 'All Students', component: Users},
  { path: '/admin/schools', exact: true,  name: 'Schools', component: Users },
  { path: '/admin/users', exact: true, name: 'All Students', component: Users},
  { path: '/admin/students/donations', exact: true, name: 'All Students', component: Users},
  { path: '/admin/students/donations', exact: true, name: 'All Students', component: Users},
];

export default adminRoutes;
