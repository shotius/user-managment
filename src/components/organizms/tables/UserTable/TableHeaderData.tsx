import {
  BoxProps,
  Button,
  HStack,
  Icon,
  IconButton,
  Th,
} from '@chakra-ui/react';
import { FC, useRef } from 'react';
import { HeaderGroup, TableHeaderProps } from 'react-table';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { DropdownIcon } from 'src/components/icons/DropdownIcon';
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
  const opacity = i > 1 ? 0.6 : 1
  return (
    <Th
      p="16px 0px"
      border="none"
      isNumeric={headerGroup.headers[i]['isNumeric']}
      {...headerGroup.headers[i].getHeaderProps()}
      {...rest}
    >
      {children || (
        <Button variant={'ghost'} _hover={{ background: 'transparent' }}>
          <HStack>
            <TextMain fontWeight={700} opacity={opacity}>
              {headerGroup.headers[i].Header}
            </TextMain>
            <Icon as={DropdownIcon} viewBox="1" opacity={opacity} />
          </HStack>
        </Button>
      )}
    </Th>
  );
};
