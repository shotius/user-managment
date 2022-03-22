import { useDisclosure } from '@chakra-ui/react';
import { useMemo, useState } from 'react';
import { Cell, Hooks } from 'react-table';
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
  const [userForSetup, setUserForSetup] = useState<ExampleObject | null>(null);

  // modals
  const {
    isOpen: isInviteModalOpen,
    onOpen: openInviteModal,
    onClose: closeInviteModal,
  } = useDisclosure();

  const {
    isOpen: isUserSetupModalOpen,
    onOpen: openUserSetup,
    onClose: closeUserSetup,
  } = useDisclosure();

  const {
    isOpen: isUserDeleteModalOpen,
    onOpen: openUserDeleteModal,
    onClose: closeUserDeleteModal,
  } = useDisclosure();

  // user table data
  const data = useMemo<ExampleObject[]>(
    () => [
      {
        id: '1',
        user: 'G',
        status: 'active',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '2',
        user: 'D',
        status: 'active',
        role: 'User',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '3',
        user: 'Z',
        status: 'active',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '4',
        user: 'B',
        status: 'disabled',
        role: 'Admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '5',
        user: 'A',
        status: 'active',
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
        Header: () => <CreateButton onClick={openInviteModal} />,
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
              openUserSetup();
              setUserForSetup(props.row.original);
            }}
            handleDeleteClick={openUserDeleteModal}
          />
        ),
      },
    ]);
  };

  return {
    data,
    columns,
    isInviteModalOpen,
    openInviteModal,
    closeInviteModal,
    getAdditionalColumns,
    checkIfActive,
    isUserSetupModalOpen,
    openUserSetup,
    closeUserSetup,
    userForSetup,
    setUserForSetup,
    isUserDeleteModalOpen,
    openUserDeleteModal,
    closeUserDeleteModal,
  };
};
