import { Flex } from '@chakra-ui/react';
import { UserTableHeader } from './UserTableHeader';

export const UserActionHeaderCell: any = (props) => {
  return (
    <Flex justify={'end'}>
      <UserTableHeader {...props} />
    </Flex>
  );
};
