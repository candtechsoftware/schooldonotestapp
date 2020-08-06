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
        to: '/admin/students/donations',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'School Donations',
        to: '/admin/schools/donations',
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
        to: '/admin/schools/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Settings',
        to: '/admin/settings/',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Manage Admin Users',
        to: '/admin/admins/',
      },
    ]
  },
  
]

