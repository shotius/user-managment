import { BoxProps, Th } from '@chakra-ui/react';
import { FC } from 'react';
import { HeaderGroup, TableHeaderProps } from 'react-table';
import { ExampleObject } from 'src/types';

interface TableHeaderDataProps {
  i: number;
  headerGroup: HeaderGroup<ExampleObject>;
}

export const TableHeaderData: FC<BoxProps & TableHeaderDataProps> = ({
  i,
  headerGroup,
  children,
  ...rest
}) => {
  return (
    <Th
      p="24px 0px"
      border="none"
      isNumeric={headerGroup.headers[i]['isNumeric']}
      {...headerGroup.headers[i].getHeaderProps()}
      {...rest}
    >
      {children || headerGroup.headers[i].Header}
    </Th>
  );
};
