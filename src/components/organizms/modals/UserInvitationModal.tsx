import {
  Modal,
  ModalOverlay,
  ModalContent,
  VStack,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Button,
} from '@chakra-ui/react';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';

interface UserInvitationModal {
  isOpen: boolean;
  onClose: () => void;
}

export const UserInvitationModal: React.FC<UserInvitationModal> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
      <ModalOverlay />
      <ModalContent p="24px 32px 48px" borderRadius={'32px'} maxW="380px">
        <VStack w="full" align="start" mb="24px" spacing="0">
          <ModalHeader p="0">Invite new user</ModalHeader>
          <TextSecondary>Fill in all the fields</TextSecondary>
        </VStack>
        <ModalCloseButton
          borderRadius={'100px'}
          mt="24px"
          mr="32px"
          border="1px solid"
          borderColor={'brandBlack.100'}
        />
        <ModalBody p="0">
          <VStack>
            <InputOutLineWithIcon
              icon={<UserProfileIcon stroke="brandBlack.400" />}
            />
            <InputOutLineWithIcon
              icon={<LetterIcon stroke="brandBlack.400" />}
            />
            <InputOutLineWithIcon icon={<KeyIcon stroke="brandBlack.400" />} />
          </VStack>
          <ModalFooter p="0">
            <Button
              bg={'brandBlue.400'}
              color="white"
              w="full"
              borderRadius={'8px'}
              mt="24px"
              p="16px"
              lineHeight={'24px'}
            >
              Send Invitation
            </Button>
          </ModalFooter>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
