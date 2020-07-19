export default [
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Dashboard',
    to: '/dashboard',
    icon: 'cil-speedometer',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Dontations',
        to: '/dashboard',
      },    
      
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
        to: '/admin/students',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage School',
        to: 'admin/schools/',
      },

    ]
  },
  
]

