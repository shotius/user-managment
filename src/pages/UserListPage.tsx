import {
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  BoxProps,
  Button,
} from '@chakra-ui/react';
import { useTable } from 'react-table';
import { useMemo, FC } from 'react';
import { InputWithLeftIcon } from 'src/components/atoms/Input/InputWithLeftIcon';
import { PageLayoutContainer } from 'src/components/atoms/templates/PageLayoutContainer';
import { HeadingMain } from 'src/components/atoms/Typography/HeadingMain';
import { SearchIcon } from 'src/components/icons/SearchIcon';

interface UserListPageProps {}
interface ExampleObject {
  id: string;
  user: string;
  status: string;
  actions: string;
  role: string;
}

export const UserListPage: FC<UserListPageProps> = ({}) => {
  const data = useMemo(
    () => [
      {
        id: '1',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'admin',
      },
      {
        id: '1',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'admin',
      },
      {
        id: '1',
        user: 'შოთიუს',
        status: 'active',
        actions: 'action1 ',
        role: 'admin',
      },
    ],
    []
  );

  const columns = useMemo<{ Header: string; accessor: keyof ExampleObject }[]>(
    () => [
      {
        Header: 'ID',
        accessor: 'id', // accessor is the "key" in the data
      },
      {
        Header: 'USER',
        accessor: 'user',
      },
      {
        Header: 'ROLE',
        accessor: 'role', // accessor is the "key" in the data
      },
      {
        Header: 'STATUS',
        accessor: 'status',
      },
      {
        Header: 'ACTIONS',
        accessor: 'actions', // accessor is the "key" in the data
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ExampleObject>({ columns, data });

  console.log('head erGroup: ', headerGroups);
  // console.log('row: ', rows.)

  return (
    <>
      <PageLayoutContainer my="64px">
        <HStack w="full" justify={'space-between'}>
          <HeadingMain>Project Access</HeadingMain>
          <InputWithLeftIcon icon={<SearchIcon />} />
        </HStack>
      </PageLayoutContainer>

      <PageLayoutContainer
        _before={{
          content: '""',
          position: 'absolute',
          left: 0,
          right: 0,
          height: '50px',
          borderTop: '1px solid #ced3dd',
          borderBottom: '1px solid #ced3dd',
          opacity: 0.5,
        }}
      >
        <Table {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                <TableHeader i={0} headerGroup={headerGroup}>
                  <Button p="8px" borderRadius={"100px"}>+</Button>
                </TableHeader>
                <TableHeader i={1} headerGroup={headerGroup} />
                <TableHeader i={2} headerGroup={headerGroup} />
                <TableHeader i={3} headerGroup={headerGroup} />
                <TableHeader i={4} headerGroup={headerGroup} />
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <Tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <Td {...cell.getCellProps()} px="0">
                        {cell.render('Cell')}
                      </Td>
                    );
                  })}
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </PageLayoutContainer>
    </>
  );
};

interface TableHeaderProps {
  i: number;
  headerGroup: any;
}

const TableHeader: FC<BoxProps & TableHeaderProps> = ({
  i,
  headerGroup,
  children,
  ...rest
}) => (
  <Th
    p="16px 0px"
    border="none"
    {...headerGroup.headers[i].getHeaderProps()}
    {...rest}
  >
    {children || headerGroup.headers[i].Header}
  </Th>
);
