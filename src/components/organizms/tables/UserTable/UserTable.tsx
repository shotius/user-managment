import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useFlexLayout, useTable } from 'react-table';
import { ExampleObject } from 'src/types';
import { useUserTable } from './useUserTable';

interface UserTableProps {}

export const UserTable: React.FC<UserTableProps> = ({}) => {
  const { data, columns } = useUserTable();

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable<ExampleObject>({ columns, data }, useFlexLayout);

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => {
          return (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                console.log('heading props: ', column);
                return (
                  <Th
                    p="16px 0px"
                    border="none"
                    position="relative"
                    {...column.getHeaderProps({
                      style: { minWidth: '10px', width: 10 },
                    })}
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
              {row.cells.map((cell) => (
                <Td {...cell.getCellProps()} pl="2" pr="0" py="32px">
                  {cell.render('Cell')}
                </Td>
              ))}
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
