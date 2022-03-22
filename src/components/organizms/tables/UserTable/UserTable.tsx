import {
  HStack,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  Select,
  Table,
  Tbody,
  Td,
  Th,
  Input,
  Thead,
  Tr,
  VStack,
  InputGroup,
  InputLeftElement,
  Button,
  ModalFooter,
} from '@chakra-ui/react';
import { useFlexLayout, useRowSelect, useSortBy, useTable } from 'react-table';
import { ButtonIconRound } from 'src/components/atoms/buttons/ButtonIconRound';
import { ButtonPagin } from 'src/components/atoms/buttons/PaginButton';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { DropdownIcon } from 'src/components/icons/DropdownIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { UserInvitationModal } from '../../modals/UserInvitationModal';
import { useUserTable } from './useUserTable';

interface UserTableProps {}

export const UserTable: React.FC<UserTableProps> = ({}) => {
  const {
    data,
    columns,
    getAdditionalColumns,
    checkIfActive,
    isInviteModalOpen,
    closeInviteModal,
  } = useUserTable();
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
      },
      useFlexLayout,
      useSortBy,
      useRowSelect,
      getAdditionalColumns
    );

  console.log('isMOdal open: ', isInviteModalOpen);
  return (
    <>
      <UserInvitationModal
        isOpen={isInviteModalOpen}
        onClose={closeInviteModal}
      />
      <VStack mb="120px" spacing="8">
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
            {rows.map((row) => {
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
        <HStack w="full" justify="space-between">
          <HStack w="220px" justify="space-between">
            <TextMain wordBreak={'keep-all'}>Records on page</TextMain>
            <Select w="80px">
              <option>5</option>
              <option>10</option>
              <option>20</option>
            </Select>
          </HStack>
          <HStack>
            <ButtonIconRound
              isDisabled={true}
              aria-label="go preview page"
              icon={<DropdownIcon transform={'rotate(90deg)'} />}
            />
            <ButtonPagin isActive={true}>1</ButtonPagin>
            <ButtonPagin isActive={false}>2</ButtonPagin>
            <ButtonIconRound
              aria-label="go preview page"
              icon={<DropdownIcon transform={'rotate(-90deg)'} />}
            />
          </HStack>
        </HStack>
      </VStack>
    </>
  );
};
