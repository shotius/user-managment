import { Button, HStack, ModalHeader, VStack } from '@chakra-ui/react';
import { capitalize } from 'src/utils/functions';
import { TextMain } from '../../../atoms/Typography/TextMain';
import { UserProfileIcon } from '../../../atoms/icons/UserProfileIcon';
import { ModalWrapper } from '../../../molecules/modals/ModalWrapper';
import { useUserDeleteModal } from './useUserDeleteModal';

interface UserDeleteModalProps {}

export const UserDeleteModal: React.FC<UserDeleteModalProps> = () => {
  const { isOpen, onClose, user, handleDelete, isDeleting } =
    useUserDeleteModal();

  if (!user) {
    onClose();
    return null;
  }

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <VStack spacing="32px" w="full" align={'start'}>
        <ModalHeader p="0">Delete User</ModalHeader>
        <HStack
          justify="space-between"
          border="1px solid"
          borderRadius="12px"
          borderColor="brandBlack.100"
          p="2"
          w="full"
        >
          <HStack>
            <UserProfileIcon stroke="black" />
            <TextMain>{user ? user.user : '-'}</TextMain>
          </HStack>
          <TextMain color="brandBlue.400">
            {user ? capitalize(user.status) : '-'}
          </TextMain>
        </HStack>
        <Button
          colorScheme={'red'}
          p="6"
          w="full"
          borderRadius={'12px'}
          onClick={() => handleDelete(user)}
          isLoading={isDeleting}
        >
          Delete User
        </Button>
      </VStack>
    </ModalWrapper>
  );
};
