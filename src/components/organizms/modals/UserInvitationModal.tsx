import { ButtonProps, ModalHeader, VStack } from '@chakra-ui/react';
import { ButtonPrimary } from 'src/components/atoms/buttons/ButtonPrimary';

import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { EditUserForm } from 'src/components/molecules/EditUserForm';
import { ModalWrapper } from 'src/components/molecules/modals/ModalWrapper';

interface UserInvitationModal {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitButton = (props: ButtonProps) => (
  <ButtonPrimary {...props}>Send Invitation</ButtonPrimary>
);

export const UserInvitationModal: React.FC<UserInvitationModal> = ({
  isOpen,
  onClose,
}) => {
  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <VStack w="full" align="start" mb="24px" spacing="0">
        <ModalHeader p="0">Invite new user</ModalHeader>
        <TextSecondary>Fill in all the fields</TextSecondary>
      </VStack>
      <EditUserForm SubmitButton={SubmitButton} />
    </ModalWrapper>
  );
};
