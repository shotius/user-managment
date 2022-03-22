import {
  ModalHeader, VStack
} from '@chakra-ui/react';
import { ButtonPrimary } from 'src/components/atoms/buttons/ButtonPrimary';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { ModalWrapper } from 'src/components/molecules/modals/ModalWrapper';

interface UserInvitationModal {
  isOpen: boolean;
  onClose: () => void;
}

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
      <VStack>
        <InputOutLineWithIcon
          icon={<UserProfileIcon stroke="brandBlack.400" />}
        />
        <InputOutLineWithIcon icon={<LetterIcon stroke="brandBlack.400" />} />
        <InputOutLineWithIcon icon={<KeyIcon stroke="brandBlack.400" />} />
      </VStack>
      <ButtonPrimary>Send Invitation</ButtonPrimary>
    </ModalWrapper>
  );
};
