export interface User {
  id: string;
  name: string;
  avatar: string;
  username: string;
  status: 'Working' | 'Offline' | 'Online';
  role: string;
  email: string;
  teams: string[];
  age: number;
}

export interface TableConfig {
  columns: {
    accessorKey: string;
    header: string;
    enableSorting?: boolean;
    enableColumnFilter?: boolean;
  }[];
  enableRowSelection?: boolean;
  enablePagination?: boolean;
  enableGlobalFilter?: boolean;
}