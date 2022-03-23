import { useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cell, Hooks } from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import { getUsers, selectUser } from 'src/redux/features/users/usersSlice';
import { ExampleObject, IUserTableColumn } from 'src/types';
import { UserActionHeaderCell } from './cells/UserActionHeaderCell';
import { UserActionsCell } from './cells/UserActionsCell';
import { UserInfoCell } from './cells/UserInfoCell';
import { UserProfileButton } from './cells/UserProfileButton';
import { UserRoleCell } from './cells/UserRoleCell';
import { UserStatusSwitch } from './cells/UserStatusSwitch';
import { UserTableHeader } from './cells/UserTableHeader';

export const useUserTable = () => {
  const [userForSetup, setUserForSetup] = useState<ExampleObject | null>(null);
  const users  = useAppSelector(selectUser);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (!users.length) {
      dispatch(getUsers(''));
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

  const checkIfActive = (cell: Cell<ExampleObject, any>) => {
    const {
      row: {
        original: { status },
      },
    } = cell;
    return status === 'active';
  };

  // adding some columns to the table
  const getAdditionalColumns = (hooks: Hooks<ExampleObject>) => {
    hooks.visibleColumns.push((columns) => [
      // Let's make a column for selection
      {
        id: 'selection',
        maxWidth: 80,
        Header: () => <CreateButton onClick={() => navigate('/invite-user')} />,
        // The cell can use the individual row's getToggleRowSelectedProps method
        // to the render a checkbox
        Cell: ({ row }) => {
          return <UserProfileButton {...row.getToggleRowSelectedProps()} />;
        },
      },
      ...columns,
      // actions collumn
      {
        id: 'actions',
        Header: UserActionHeaderCell,
        Cell: (props: Cell<ExampleObject>) => (
          <UserActionsCell
            handleSettingClick={() => {
              navigate('/setup-user');
              setUserForSetup(props.row.original);
            }}
            handleDeleteClick={() => navigate('/delete-user')}
          />
        ),
      },
    ]);
  };

  return {
    data,
    columns,
    getAdditionalColumns,
    checkIfActive,
    userForSetup,
    setUserForSetup,
  };
};
