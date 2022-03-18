import { HStack, Icon, IconButton, Switch, Td } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Cell } from 'react-table';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { SettingIcon } from 'src/components/icons/SettingIcon';
import { TrashBinIcon } from 'src/components/icons/TrashBinIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { ExampleObject, IUserTableColumn, TdProps } from 'src/types';

interface getAppropriateCellProps extends TdProps {
  cell: Cell<ExampleObject, any>;
}

const tableHeaders = ['ID', 'USER', 'ROLE', 'STATUS', 'ACTIONS'] as const;

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
    () =>
      tableHeaders.map((header) => ({
        Header: header,
        accessor: header.toLowerCase() as keyof ExampleObject, // accessor is the "key" in the data
      })),
    []
  );

  const getAppropriateHeading = ({}) => {};

  const getAppropriateCell = ({ cell, ...rest }: getAppropriateCellProps) => {
    const id = cell.column.id as keyof ExampleObject;
    switch (id) {
      case 'id':
        return (
          <Td {...rest}>
            <IconButton
              borderRadius={'100px'}
              bg="transparent"
              border="1px solid rgba(38, 41, 46, 0.1);"
              _hover={{
                background: 'transparent',
              }}
              icon={<UserProfileIcon />}
              aria-label="userProfile"
            />
          </Td>
        );
      case 'user':
        return (
          <Td w="500px" {...rest}>
            <TextMain>{cell.render('Cell')}</TextMain>
            <TextSecondary>{cell.row.original.email}</TextSecondary>
          </Td>
        );
      case 'role':
        return (
          <Td w="10px" {...rest}>
            <HStack>
              <TextMain>{cell.render('Cell')}</TextMain>
              {cell.row.original.role === 'Admin' ? (
                <Icon as={KeyIcon} />
              ) : null}
            </HStack>
          </Td>
        );
      case 'status':
        return (
          <Td isNumeric={true} pr="45px" {...rest}>
            <Switch size="md" defaultChecked={true} />
          </Td>
        );
      case 'actions':
        return (
          <Td isNumeric={true} {...rest} p="0">
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
          </Td>
        );
      default:
        return (
          <Td isNumeric={true} {...rest}>
            {cell.render('Cell')}
          </Td>
        );
    }
  };

  return { data, columns, getAppropriateCell, getAppropriateHeading };
};
