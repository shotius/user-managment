import { ButtonProps, ModalHeader, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { ButtonPrimary } from 'src/components/atoms/buttons/ButtonPrimary';

import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { EditUserForm } from 'src/components/molecules/forms/EditUserForm';
import { ModalWrapper } from 'src/components/molecules/modals/ModalWrapper';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  closeInviteModal,
  openInviteModal,
  selectInviteModal,
} from 'src/redux/features/modals/modalsSlice';

interface UserInvitationModal {}

const SubmitButton = (props: ButtonProps) => (
  <ButtonPrimary {...props}>Send Invitation</ButtonPrimary>
);

export const UserInvitationModal: React.FC<UserInvitationModal> = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  
  const isOpen = useAppSelector(selectInviteModal);
  
  const onOpen = () => dispatch(openInviteModal());
  const onClose = () => {
    dispatch(closeInviteModal());
    navigate('/');
  };

  useEffect(() => {
    onOpen();
  }, []);

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
