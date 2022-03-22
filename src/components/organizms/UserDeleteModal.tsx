import { Box, Button, HStack, ModalHeader, VStack } from '@chakra-ui/react';
import { TextMain } from '../atoms/Typography/TextMain';
import { UserProfileIcon } from '../icons/UserProfileIcon';
import { ModalWrapper } from '../molecules/modals/ModalWrapper';

interface UserDeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserDeleteModal: React.FC<UserDeleteModalProps> = (props) => {
  return (
    <ModalWrapper {...props}>
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
            <TextMain>Name lastname</TextMain>
          </HStack>
          <TextMain color="brandBlue.400">Active</TextMain>
        </HStack>
        <Button colorScheme={'red'} p="6" w="full" borderRadius={'12px'}>
          Delete User
        </Button>
      </VStack>
    </ModalWrapper>
  );
};
