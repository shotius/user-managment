import { ModalHeader, VStack } from '@chakra-ui/react';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { EditUserForm } from 'src/components/molecules/forms/EditUserForm';
import { ModalWrapper } from 'src/components/molecules/modals/ModalWrapper';
import { useUserInvitationModal } from './useUserInvitationModal';

interface UserInvitationModal {}

export const UserInvitationModal: React.FC<UserInvitationModal> = () => {
  const { isOpen, onClose, ...props } = useUserInvitationModal();

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <VStack w="full" align="start" mb="24px" spacing="0">
        <ModalHeader p="0">Invite new user</ModalHeader>
        <TextSecondary>Fill in all the fields</TextSecondary>
      </VStack>
      <EditUserForm submitButtonText="Send Invitation" {...props} />
    </ModalWrapper>
  );
};
