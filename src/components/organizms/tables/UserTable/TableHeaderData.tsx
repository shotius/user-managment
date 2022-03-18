import { BoxProps } from '@chakra-ui/react';
import { FC } from 'react';
import { IUserTableColumnTypes } from 'src/types';
import { useUserTable } from './useUserTable';

interface TableHeaderDataProps {
  header: IUserTableColumnTypes;
}

export const TableHeaderData: FC<BoxProps & TableHeaderDataProps> = ({
  header,
  ...rest
}) => {
  const { getAppropriateHeading } = useUserTable();

  return <>{getAppropriateHeading({ header, ...rest })}</>;
};
