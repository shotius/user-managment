import {
  HStack
} from '@chakra-ui/react';
import { FC } from 'react';
import { InputWithLeftIcon } from 'src/components/atoms/Input/InputWithLeftIcon';
import { PageLayoutContainer } from 'src/components/atoms/templates/PageLayoutContainer';
import { UserTableLayoutContainer } from 'src/components/atoms/templates/TableLayoutContainer';
import { HeadingMain } from 'src/components/atoms/Typography/HeadingMain';
import { SearchIcon } from 'src/components/atoms/icons/SearchIcon';
import { UserTable } from 'src/components/organizms/tables/UserTable/UserTable';

interface UserListPageProps {}

export const UserListPage: FC<UserListPageProps> = ({}) => {
  return (
    <>
      {/* Header  */}
      <PageLayoutContainer my="64px">
        <HStack w="full" justify={'space-between'}>
          <HeadingMain>Project Access</HeadingMain>
          <InputWithLeftIcon icon={<SearchIcon />} />
        </HStack>
      </PageLayoutContainer>

      {/* User Table  */}
      <UserTableLayoutContainer>
        <UserTable />
      </UserTableLayoutContainer>
    </>
  );
};
