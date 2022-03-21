import { useMemo } from 'react';
import { Hooks } from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
import { ExampleObject, IUserTableColumn } from 'src/types';
import { UserActionHeaderCell } from './cells/UserActionHeaderCell';
import { UserActionsCell } from './cells/UserActionsCell';
import { UserInfoCell } from './cells/UserInfoCell';
import { UserProfileButton } from './cells/UserProfileButton';
import { UserRoleCell } from './cells/UserRoleCell';
import { UserStatusSwitch } from './cells/UserStatusSwitch';
import { UserTableHeader } from './cells/UserTableHeader';

export const useUserTable = () => {
  const data = useMemo<ExampleObject[]>(
    () => [
      {
        id: '1',
        user: 'G',
        status: 'active',
        actions: 'action1 ',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '2',
        user: 'D',
        status: 'active',
        actions: 'action1 ',
        role: 'User',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '3',
        user: 'Z',
        status: 'active',
        actions: 'action1 ',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '4',
        user: 'B',
        status: 'active',
        actions: 'action1 ',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '5',
        user: 'A',
        status: 'active',
        actions: 'action1 ',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
    ],
    []
  );

  // create collumns
  const columns = useMemo<IUserTableColumn[]>(
    () => [
      {
        width: 450,
        Header: UserTableHeader,
        accessor: 'user',
        Cell: UserInfoCell,
      },
      {
        Header: UserTableHeader,
        accessor: 'role',
        Cell: UserRoleCell,
      },
      {
        Header: UserTableHeader,
        accessor: 'status',
        Cell: UserStatusSwitch,
      },
      {
        Header: UserActionHeaderCell,
        accessor: 'actions',
        Cell: UserActionsCell,
        disableSortBy: true
      },
    ],
    []
  );

  const getAdditionalColumns = (hooks: Hooks<ExampleObject>) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: 'selection',
        maxWidth: 80,
        Header: () => <CreateButton />,
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => {
          return <UserProfileButton {...row.getToggleRowSelectedProps()} />;
        },
      },
      ...columns,
    ]);
  };

  return { data, columns, getAdditionalColumns };
};
