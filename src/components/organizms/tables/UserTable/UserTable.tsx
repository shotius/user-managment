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
              {headerGroup.headers.map((heading) => {
                console.log(heading.Header);
                return (
                  <TableHeaderData
                    header={'actions'}
                    position="relative"
                    w="8%"
                    key={heading.id}
                  >
                    <CreateButton />
                  </TableHeaderData>
                );
              })}
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
