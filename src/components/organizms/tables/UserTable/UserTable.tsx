import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useFlexLayout, useRowSelect, useSortBy, useTable } from 'react-table';
import { useUserTable } from './useUserTable';

interface UserTableProps {}

export const UserTable: React.FC<UserTableProps> = ({}) => {
  const { data, columns, getAdditionalColumns, checkIfActive } = useUserTable();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFlexLayout,
      useSortBy,
      useRowSelect,
      getAdditionalColumns
    );

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => {
          return (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                // console.log('column: ', column)
                return (
                  <Th
                    p="16px 4px"
                    border="none"
                    position="relative"
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render('Header')}
                  </Th>
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
              {row.cells.map((cell) => {
                const isActive = checkIfActive(cell);
                return (
                  <Td
                    {...cell.getCellProps()}
                    pl="2"
                    pr="0"
                    py="32px"
                    opacity={!isActive ? 0.5 : 1}
                  >
                    {cell.render('Cell')}
                  </Td>
                );
              })}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
