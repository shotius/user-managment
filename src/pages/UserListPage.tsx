import {
  BoxProps, HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr
} from '@chakra-ui/react';
import { FC, useMemo } from 'react';
import { Cell, HeaderGroup, useTable } from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
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

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ExampleObject>({ columns, data });

  // console.log('head erGroup: ', headerGroups);
  // console.log('row: ', rows);

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
          height: '55px',
          borderTop: '1px solid #ced3dd',
          borderBottom: '1px solid #ced3dd',
          opacity: 0.5,
        }}
      >
        <Table {...getTableProps()} style={{ borderCollapse: 'collapse' }}>
          <Thead>
            {headerGroups.map((headerGroup) => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                <TableHeader
                  i={0}
                  headerGroup={headerGroup}
                  position="relative"
                  minW="20px"
                >
                  <CreateButton />
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
                  {row.cells.map((cell) => (
                    <TableRowData cell={cell} key={cell.value} />
                  ))}
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
  headerGroup: HeaderGroup<ExampleObject>;
}

const TableHeader: FC<BoxProps & TableHeaderProps> = ({
  i,
  headerGroup,
  children,
  ...rest
}) => {
  return (
    <Th
      p="16px 0px"
      border="none"
      isNumeric={headerGroup.headers[i]['isNumeric']}
      {...headerGroup.headers[i].getHeaderProps()}
      {...rest}
    >
      {children || headerGroup.headers[i].Header}
    </Th>
  );
};

interface TableRowDataProps {
  cell: Cell<ExampleObject, any>;
}

const TableRowData: FC<BoxProps & TableRowDataProps> = ({ cell }) => {
  return (
    <Td
      px="0"
      isNumeric={cell.column['isNumeric']}
      textAlign={cell.column['textAlign']}
      {...cell.getCellProps()}
    >
      {cell.render('Cell')}
    </Td>
  );
};
