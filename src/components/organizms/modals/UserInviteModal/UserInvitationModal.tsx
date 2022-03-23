import { ModalHeader, VStack } from '@chakra-ui/react';
import { ButtonPrimary } from 'src/components/atoms/buttons/ButtonPrimary';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { FormUserEdit } from 'src/components/molecules/forms/FormUserEdit';
import { ModalWrapper } from 'src/components/molecules/modals/ModalWrapper';
import { useUserInvitationModal } from './useUserInvitationModal';

interface UserInvitationModal {}

export const UserInvitationModal: React.FC<UserInvitationModal> = () => {
  const { isOpen, onClose, isSubmitting, ...formProps } = useUserInvitationModal();

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
      <VStack w="full" align="start" mb="24px" spacing="0">
        <ModalHeader p="0">Invite new user</ModalHeader>
        <TextSecondary>Fill in all the fields</TextSecondary>
      </VStack>
      <FormUserEdit
        {...formProps}
        submitButton={
          <ButtonPrimary type="submit" isLoading={isSubmitting}>
            "Send Invitation"
          </ButtonPrimary>
        }
      />
    </ModalWrapper>
  );
};
