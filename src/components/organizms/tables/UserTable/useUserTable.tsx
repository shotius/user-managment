import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cell, Hooks } from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  getUsers, updateUser
} from 'src/redux/features/users/usersSlice';
import { ExampleObject, IUserTableColumn } from 'src/types';
import { UserActionHeaderCell } from './cells/UserActionHeaderCell';
import { UserActionsCell } from './cells/UserActionsCell';
import { UserInfoCell } from './cells/UserInfoCell';
import { UserProfileButton } from './cells/UserProfileButton';
import { UserRoleCell } from './cells/UserRoleCell';
import { UserStatusSwitch } from './cells/UserStatusSwitch';
import { UserTableHeader } from './cells/UserTableHeader';

export const useUserTable = () => {
  const users = useAppSelector((state) => state.users.users);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers());
    }
  }, []);

  // user table data
  const data = useMemo<ExampleObject[]>(() => users, [users]);

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
    ],
    []
  );

  function handleError(error: unknown) {
    console.log('unhandled error: ', error);
  }

  function handleToggleStatus(user: ExampleObject) {
    const toggledObj: ExampleObject = {
      ...user,
      status: user.status === 'active' ? 'inactive' : 'active',
    };
    dispatch(updateUser(toggledObj)).catch(handleError);
  }

  function checkIfActive(cell: Cell<ExampleObject, any>) {
    const status = cell.row.original.status;
    return status === 'active';
  }

  // Adding some columns to the table
  function getAdditionalColumns(hooks: Hooks<ExampleObject>) {
    hooks.visibleColumns.push((columns) => [
      { // Selection - first column
        id: 'selection',
        maxWidth: 80,
        Header: () => <CreateButton onClick={() => navigate('/invite-user')} />,
        Cell: ({ row }) => {
          return <UserProfileButton {...row.getToggleRowSelectedProps()} />;
        },
      },
      ...columns,
      { // Actions collumn
        id: 'actions',
        Header: UserActionHeaderCell,
        Cell: UserActionsCell,
      },
    ]);
  }

  return {
    data,
    columns,
    getAdditionalColumns,
    checkIfActive,
    handleToggleStatus,
  };
};
