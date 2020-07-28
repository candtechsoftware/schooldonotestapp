import React from 'react';
const AdminDonations = React.lazy(() => import('./views/pages/admin/dashboard/AdminDashboard'));
const StudentDashboard = React.lazy(() => import('./views/pages/student/Dashboard/StudentDashboard'));
const Schools = React.lazy(() => import('./views/pages/admin/schools/Schools'));
const routes = [
  { path: '/dashboard', exact: true, name: 'Home', component: AdminDonations },
  { path: '/dashboard', name: 'Dashboard', component: AdminDonations },
  { path: '/admin/schools', exact: true,  name: 'School Donations', component: Schools },
  { path: '/schools', exact: true,  name: 'Users', component: AdminDonations },
  { path: '/students', exact: true, name: 'My Donations', component: StudentDashboard}
];

export default routes;
