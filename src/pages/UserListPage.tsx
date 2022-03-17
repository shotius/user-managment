import {
  Divider,
  HStack,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '@chakra-ui/react';
import { InputWithLeftIcon } from 'src/components/atoms/Input/InputWithLeftIcon';
import { PageLayoutContainer } from 'src/components/atoms/templates/PageLayoutContainer';
import { HeadingMain } from 'src/components/atoms/Typography/HeadingMain';
import { SearchIcon } from 'src/components/icons/SearchIcon';

interface UserListPageProps {}

export const UserListPage: React.FC<UserListPageProps> = ({}) => {
  return (
    <>
      <PageLayoutContainer my="64px">
        <HStack w="full" justify={'space-between'}>
          <HeadingMain>Project Access</HeadingMain>
          <InputWithLeftIcon icon={<SearchIcon />} />
        </HStack>
      </PageLayoutContainer>
      {/* <Divider /> */}
      <PageLayoutContainer
        _before={{
          content: '""',
          // height: '50px',
          position: 'absolute',
          left: '0',
          // top: 0,
          right: 0,
          borderTop: '1px solid black',
          borderBottom: '1px solid black',
        }}
      >
        <Table style={{ borderCollapse: 'collapse' }}>
          <Thead border={'none'}>
            <Tr>
              <Th p="0">Plus</Th>
              <Th>user</Th>
              <Th>Role</Th>
              <Th>Status</Th>
              <Th>Actions</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td p="0">id</Td>
              <Td>user</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
            <Tr>
              <Td p="0">id</Td>
              <Td>user</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
            <Tr>
              <Td p="0">id</Td>
              <Td>user</Td>
              <Td>inches</Td>
              <Td>millimetres (mm)</Td>
              <Td>25.4</Td>
            </Tr>
          </Tbody>
        </Table>
      </PageLayoutContainer>
    </>
  );
};
