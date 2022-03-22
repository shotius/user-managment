import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalContentProps,
} from '@chakra-ui/react';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWrapper: React.FC<ModalWrapperProps & ModalContentProps> = ({
  isOpen,
  onClose,
  children,
  p = '24px 32px 48px',
  borderRadius = '32px',
  maxW = '380px',
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
      <ModalOverlay />
      <ModalContent p={p} borderRadius={borderRadius} maxW={maxW} {...rest}>
        <ModalCloseButton
          borderRadius={'100px'}
          mt="24px"
          mr="32px"
          border="1px solid"
          borderColor={'brandBlack.100'}
        />
        <ModalBody p="0">{children}</ModalBody>
      </ModalContent>
    </Modal>
  );
};
