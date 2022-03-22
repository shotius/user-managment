import { Modal, ModalCloseButton, ModalContent, ModalOverlay } from '@chakra-ui/react';

interface UserSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UserSetupModal: React.FC<UserSetupModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
      </ModalContent>
    </Modal>
  );
};
