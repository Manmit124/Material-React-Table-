export const mockUsers = [
  {
    id: '1',
    name: 'John Doe',
    username: '@johndoe',
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Product Manager',
    email: 'john@company.com',
    teams: ['Design', 'Product', 'Development'],
    age: 32
  },
  {
    id: '2',
    name: 'Jane Smith',
    username: '@janesmith',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Designer',
    email: 'jane@company.com',
    teams: ['Design', 'Product'],
    age: 28
  },
  {
    id: '3',
    name: 'Mike Johnson',
    username: '@mikej',
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Developer',
    email: 'mike@company.com',
    teams: ['Development'],
    age: 34
  },
  {
    id: '4',
    name: 'Sarah Wilson',
    username: '@sarahw',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    status: 'Offline',
    role: 'Designer',
    email: 'sarah@company.com',
    teams: ['Design'],
    age: 30
  },
  {
    id: '5',
    name: 'Alex Thompson',
    username: '@alext',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    status: 'Online',
    role: 'Developer',
    email: 'alex@company.com',
    teams: ['Development', 'Product'],
    age: 29
  },
  {
    id: '6',
    name: 'Emily Davis',
    username: '@emilyd',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Product Manager',
    email: 'emily@company.com',
    teams: ['Product'],
    age: 35
  },
  {
    id: '7',
    name: 'David Brown',
    username: '@davidb',
    avatar: 'https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=100&h=100&fit=crop',
    status: 'Online',
    role: 'Designer',
    email: 'david@company.com',
    teams: ['Design', 'Product'],
    age: 31
  },
  {
    id: '8',
    name: 'Lisa Anderson',
    username: '@lisaa',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Developer',
    email: 'lisa@company.com',
    teams: ['Development'],
    age: 27
  },
  {
    id: '9',
    name: 'Mark Wilson',
    username: '@markw',
    avatar: 'https://images.unsplash.com/photo-1592478411213-6153e4ebc07d?w=100&h=100&fit=crop',
    status: 'Offline',
    role: 'Product Manager',
    email: 'mark@company.com',
    teams: ['Product', 'Development'],
    age: 38
  },
  {
    id: '10',
    name: 'Sophie Taylor',
    username: '@sophiet',
    avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Designer',
    email: 'sophie@company.com',
    teams: ['Design'],
    age: 33
  },
  {
    id: '11',
    name: 'Ryan Martinez',
    username: '@ryanm',
    avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop',
    status: 'Online',
    role: 'Developer',
    email: 'ryan@company.com',
    teams: ['Development', 'Product'],
    age: 29
  },
  {
    id: '12',
    name: 'Emma White',
    username: '@emmaw',
    avatar: 'https://images.unsplash.com/photo-1614283233556-f35b0c801ef1?w=100&h=100&fit=crop',
    status: 'Working',
    role: 'Designer',
    email: 'emma@company.com',
    teams: ['Design', 'Product'],
    age: 26
  }
];

export const tableConfig = {
  columns: [
    {
      accessorKey: 'name',
      header: 'Name',
      enableColumnFilter: true,
    },
    {
      accessorKey: 'status',
      header: 'Status',
      enableColumnFilter: true,
    },
    {
      accessorKey: 'role',
      header: 'Role',
      enableColumnFilter: true,
    },
    {
      accessorKey: 'email',
      header: 'Email',
      enableColumnFilter: false,
    },
    {
      accessorKey: 'teams',
      header: 'Teams',
      enableColumnFilter: true,
    },
    {
      accessorKey: 'age',
      header: 'Age',
      enableSorting: true,
      enableColumnFilter: false,
    },
  ],
  enableRowSelection: true,
  enablePagination: true,
  enableGlobalFilter: true,
};