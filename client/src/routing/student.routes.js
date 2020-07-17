import React from 'react';
const StudentDashboard = React.lazy(() => import('../views/pages/student/Dashboard/StudentDashboard'));
 
const studentRoutes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/students', name: 'Dashboard', component: StudentDashboard },
];

export default studentRoutes;
