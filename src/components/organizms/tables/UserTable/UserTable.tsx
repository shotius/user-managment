import { Table, Tbody, Thead, Tr } from '@chakra-ui/react';
import { Fragment, useMemo } from 'react';
import { useTable } from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
import { ExampleObject } from 'src/types';
import { TableCell } from './TableCell';
import { TableHeaderData } from './TableHeaderData';
import { useUserTable } from './useUserTable';

interface UserTableProps {}

export const UserTable: React.FC<UserTableProps> = ({}) => {
  const { data, columns } = useUserTable();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ExampleObject>({ columns, data });

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => {
          
          return (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(heading => console.log(heading.Header))}
              <TableHeaderData
                i={0}
                headerGroup={headerGroup}
                position="relative"
                w="8%"
              >
                <CreateButton />
              </TableHeaderData>
              <TableHeaderData i={1} headerGroup={headerGroup} />
              <TableHeaderData i={2} headerGroup={headerGroup} />
              <TableHeaderData i={3} headerGroup={headerGroup} />
              <TableHeaderData i={4} headerGroup={headerGroup} />
            </Tr>
          );
        })}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {rows.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <TableCell pl="4" py="8" cell={cell} {...cell.getCellProps()} />
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
