import { useMemo, useState, useCallback } from 'react';
import {
  MaterialReactTable,
  type MRT_ColumnDef,
  type MRT_ColumnFiltersState,
  type MRT_Row,
  type MRT_SortingState,
} from 'material-react-table';
import { Box, Chip, Avatar, Typography, useTheme } from '@mui/material';
import debounce from 'lodash.debounce';
import type { User, TableConfig } from '../types/table';

interface DataTableProps {
  data: User[];
  config: TableConfig;
}

export const DataTable = ({ data, config }: DataTableProps) => {
  const theme = useTheme();
  const [columnFilters, setColumnFilters] = useState<MRT_ColumnFiltersState>([]);
  const [globalFilter, setGlobalFilter] = useState('');
  const [searchValue, setSearchValue] = useState('');
  const [rowSelection, setRowSelection] = useState({});
  const [sorting, setSorting] = useState<MRT_SortingState>([]);

  const debouncedSearch = useCallback(
    debounce((value: string) => {
      setGlobalFilter(value);
    }, 500),
    []
  );

  const handleSearch = (value: string) => {
    setSearchValue(value);
    debouncedSearch(value);
  };

  const filteredData = useMemo(() => {
    let filtered = [...data];

    if (globalFilter) {
      filtered = filtered.filter(row => 
        row.name.toLowerCase().includes(globalFilter.toLowerCase())
      );
    }

    columnFilters.forEach(filter => {
      if (filter.id === 'role') {
        const selectedRoles = filter.value as string[];
        if (selectedRoles && selectedRoles.length > 0) {
          filtered = filtered.filter(row => selectedRoles.includes(row.role));
        }
      }
    });

    if (sorting.length > 0) {
      const sort = sorting[0];
      filtered.sort((a, b) => {
        if (sort.id === 'age') {
          return sort.desc ? b.age - a.age : a.age - b.age;
        }
        return 0;
      });
    }

    return filtered;
  }, [data, globalFilter, columnFilters, sorting]);

  const columns = useMemo<MRT_ColumnDef<User>[]>(
    () => [
      {
        accessorKey: 'name',
        header: 'Name',
        Cell: ({ row }) => (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <Avatar 
              src={row.original.avatar} 
              alt={row.original.name}
              sx={{ 
                width: 40, 
                height: 40,
                border: `2px solid ${theme.palette.primary.light}` 
              }}
            />
            <Box>
              <Typography sx={{ fontWeight: 500 }}>{row.original.name}</Typography>
              <Typography 
                variant="caption" 
                sx={{ 
                  color: theme.palette.text.secondary,
                  display: 'block'
                }}
              >
                {row.original.username}
              </Typography>
            </Box>
          </Box>
        ),
        filterFn: 'contains',
        size: 250,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        Cell: ({ cell }) => {
          const status = cell.getValue<string>();
          const color = status === 'Working' ? 'success' : 
                       status === 'Online' ? 'primary' : 'default';
          return (
            <Chip
              label={status}
              color={color}
              size="small"
              sx={{ 
                fontWeight: 500,
                minWidth: 80,
                textAlign: 'center'
              }}
            />
          );
        },
        size: 120,
      },
      {
        accessorKey: 'role',
        header: 'Role',
        filterVariant: 'multi-select',
        filterSelectOptions: [...new Set(data.map(item => item.role))],
        Cell: ({ cell }) => (
          <Typography sx={{ fontWeight: 500 }}>
            {cell.getValue<string>()}
          </Typography>
        ),
        size: 150,
      },
      {
        accessorKey: 'email',
        header: 'Email',
        Cell: ({ cell }) => (
          <Typography sx={{ color: theme.palette.text.secondary }}>
            {cell.getValue<string>()}
          </Typography>
        ),
        size: 200,
      },
      {
        accessorKey: 'teams',
        header: 'Teams',
        Cell: ({ cell }) => (
          <Box sx={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {cell.getValue<string[]>().map((team) => (
              <Chip 
                key={team} 
                label={team} 
                size="small"
                sx={{
                  backgroundColor: theme.palette.primary.light,
                  color: theme.palette.primary.contrastText,
                  fontWeight: 500,
                }}
              />
            ))}
          </Box>
        ),
        size: 250,
      },
      {
        accessorKey: 'age',
        header: 'Age',
        enableSorting: true,
        Cell: ({ cell }) => (
          <Typography sx={{ fontWeight: 500 }}>
            {cell.getValue<number>()}
          </Typography>
        ),
        size: 100,
      },
    ],
    [data, theme],
  );

  return (
    <MaterialReactTable
      columns={columns}
      data={filteredData}
      enableColumnFilters
      enableGlobalFilter
      enableRowSelection
      enablePagination
      enableSorting
      muiTablePaperProps={{
        elevation: 0,
        sx: {
          borderRadius: '1rem',
          border: `1px solid ${theme.palette.divider}`,
          overflow: 'hidden',
        },
      }}
      muiTableHeadCellProps={{
        sx: {
          backgroundColor: theme.palette.grey[50],
          fontWeight: 600,
        },
      }}
      muiTableBodyRowProps={{
        sx: {
          '&:hover': {
            backgroundColor: theme.palette.action.hover,
          },
        },
      }}
      onColumnFiltersChange={setColumnFilters}
      onGlobalFilterChange={handleSearch}
      onRowSelectionChange={setRowSelection}
      onSortingChange={setSorting}
      state={{
        columnFilters,
        globalFilter: searchValue,
        rowSelection,
        sorting,
      }}
      renderTopToolbarCustomActions={() => (
        <Typography 
          variant="h6" 
          component="div"
          sx={{ 
            fontWeight: 600,
            color: theme.palette.text.primary,
            p: 2,
          }}
        >
          Team Members
        </Typography>
      )}
      initialState={{
        showColumnFilters: true,
        pagination: { pageSize: 10, pageIndex: 0 },
        density: 'comfortable',
      }}
      muiSearchTextFieldProps={{
        placeholder: 'Search by name...',
        sx: { minWidth: 300 },
        variant: 'outlined',
        value: searchValue,
        onChange: (event) => handleSearch(event.target.value),
      }}
    />
  );
};