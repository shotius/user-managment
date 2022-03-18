import { Button, IconButton, Td } from '@chakra-ui/react';
import { useMemo } from 'react';
import { Cell } from 'react-table';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { ExampleObject, TdProps } from 'src/types';

interface getAppropriateCellProps {
  cell: Cell<ExampleObject, any>;
}

export const useUserTable = () => {
  const data = useMemo(
    () => [
      {
        id: '1',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '2',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'admin',
        email: 'sh.archemashvili@gmail.com',
      },
      {
        id: '3',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'admin',
        email: 'sh.archemashvili@gmail.com',
      },
    ],
    []
  );

  const columns = useMemo<{ Header: string; accessor: keyof ExampleObject }[]>(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
        textAlign: 'center',
      },
      {
        Header: 'USER',
        accessor: 'user',
      },
      {
        Header: 'ROLE',
        accessor: 'role',
        isNumeric: true,
      },
      {
        Header: 'STATUS',
        accessor: 'status',
        isNumeric: true,
      },
      {
        Header: 'ACTIONS',
        accessor: 'actions',
        isNumeric: true,
      },
    ],
    []
  );

  const getAppropriateCell = ({
    cell,
    ...rest
  }: getAppropriateCellProps & TdProps) => {
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
        console.log(cell.row.original);
        return (
          <Td w="500px" {...rest}>
            <TextMain>{cell.render('Cell')}</TextMain>
            <TextSecondary>{cell.row.original.email}</TextSecondary>
          </Td>
        );
      case 'role':
        return (
          <Td w="10px" {...rest}>
            {cell.render('Cell')}
          </Td>
        );
      case 'status':
        return (
          <Td isNumeric={true} {...rest}>
            {cell.render('Cell')}
          </Td>
        );
      case 'actions':
        return (
          <Td isNumeric={true} {...rest}>
            {cell.render('Cell')}
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

  return { getAppropriateCell, data, columns };
};
