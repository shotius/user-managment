import { VStack } from '@chakra-ui/react';
import { UserTablePagination } from '../organizms/pagination/UserTablePagination';
import { UserTable } from '../organizms/tables/UserTable/UserTable';

interface UserTableTemplateProps {}

export const UserTableTemplate: React.FC<UserTableTemplateProps> = ({}) => {
  return (
    <VStack mb="120px" spacing="8">
      <UserTable />
      <UserTablePagination />
    </VStack>
  );
};
