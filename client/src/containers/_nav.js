export default [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Student Dontations',
        to: '/student/donations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'School Donations',
        to: '/school/donations',
      },
    ]
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Manage',
    to: '/manage',
    icon: 'cil-speedometer',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Student',
        to: '/students/manage',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage School',
        to: '/school/manage',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Admins',
        to: '/admin/manage',
      },
    ]
  },
  
]

