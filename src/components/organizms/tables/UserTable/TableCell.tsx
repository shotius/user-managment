import { Td } from '@chakra-ui/react';
import { ComponentProps, FC } from 'react';
import { Cell } from 'react-table';
import { ExampleObject, TdProps } from 'src/types';
import { useUserTable } from './useUserTable';

interface TableRowDataProps {
  cell: Cell<ExampleObject, any>;
}

export const TableCell: FC<TableRowDataProps & TdProps> = ({
  cell,
  children,
  ...rest
}) => {
  const { getAppropriateCell } = useUserTable();

  return <>{getAppropriateCell({cell, ...rest})}</>;
};
