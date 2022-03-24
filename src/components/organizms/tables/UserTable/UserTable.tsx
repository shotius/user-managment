import { Table, Tbody, Td, Th, Thead, Tr } from '@chakra-ui/react';
import { useUserTable } from './useUserTable';

interface UserTableProps {}

export const UserTable: React.FC<UserTableProps> = ({}) => {
  const {
    checkIfActive,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    prepareRow,
  } = useUserTable();

  return (
    <Table {...getTableProps()}>
      <Thead>
        {headerGroups.map((headerGroup) => {
          return (
            <Tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Th
                  p="16px 4px"
                  border="none"
                  position="relative"
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                >
                  {column.render('Header')}
                </Th>
              ))}
            </Tr>
          );
        })}
      </Thead>
      <Tbody {...getTableBodyProps()}>
        {page.map((row) => {
          prepareRow(row);
          return (
            <Tr {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Td
                  {...cell.getCellProps()}
                  pl="2"
                  pr="0"
                  py="32px"
                  opacity={!checkIfActive(cell) ? 0.5 : 1}
                >
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
