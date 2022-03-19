import {
  Button,
  Flex,
  HStack,
  Icon,
  IconButton,
  Switch,
  VStack,
} from '@chakra-ui/react';
import { useMemo } from 'react';
import { Cell } from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { DropdownIcon } from 'src/components/icons/DropdownIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { SettingIcon } from 'src/components/icons/SettingIcon';
import { TrashBinIcon } from 'src/components/icons/TrashBinIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { ExampleObject, IUserTableColumn, TdProps, ThProps } from 'src/types';
import { UserProfileButton } from './cells/UserProfileButton';
import { UserTableHeader } from './cells/UserTableHeader';

interface getAppropriateCellProps extends TdProps {
  cell: Cell<ExampleObject, any>;
}

interface getAppropriateHeading extends ThProps {
  header: UserObjectKeyTypes;
}

type UserObjectKeyTypes = keyof ExampleObject;

export const useUserTable = () => {
  const data = useMemo<ExampleObject[]>(
    () => [
      {
        id: '1',
        user: 'შოთიუს',
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
        user: 'შოთიუს',
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
        Cell: ({ row: { original } }) => {
          return (
            <CenterVerticaly>
              <VStack align={'flex-start'} spacing="1" px="2">
                <TextMain>{original.user}</TextMain>
                <TextSecondary>{original.email}</TextSecondary>
              </VStack>
            </CenterVerticaly>
          );
        },
      },
      {
        Header: UserTableHeader,
        accessor: 'role',
        Cell: ({ row: { original } }) => (
          <CenterVerticaly>
            <HStack>
              <TextMain>{original.role}</TextMain>
              {original.role === 'Admin' ? <Icon as={KeyIcon} /> : null}
            </HStack>
          </CenterVerticaly>
        ),
      },
      {
        Header: UserTableHeader,
        accessor: 'status',
        Cell: ({ row: { original } }) => (
          <CenterVerticaly>
            <Switch size="md" pl="4" defaultChecked={original.isActive} />
          </CenterVerticaly>
        ),
      },
      {
        Header: (props) => (
          <Flex justify={'end'}>
            <UserTableHeader {...props} />
          </Flex>
        ),
        accessor: 'actions',
        Cell: () => (
          <HStack justify={'end'}>
            <IconButton
              icon={<SettingIcon />}
              aria-label="settings"
              bg="white"
              size={'lg'}
            />
            <IconButton
              icon={<TrashBinIcon />}
              aria-label="deleteUser"
              bg="white"
            />
          </HStack>
        ),
      },
    ],
    []
  );

  return { data, columns };
};
