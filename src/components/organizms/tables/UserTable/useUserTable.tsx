import { useMemo } from 'react';
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
        user: 'Levan',
        status: 'active',
        actions: 'action1 ',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '2',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'User',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '3',
        user: 'Giorgi',
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
        accessor: 'id',
        maxWidth: 70,
        Header: () => <CreateButton />,
        Cell: () => <UserProfileButton />,
      },
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
      },
    ],
    []
  );

  return { data, columns };
};
