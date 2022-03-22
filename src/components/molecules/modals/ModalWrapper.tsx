import {
  Modal,
  ModalBody,
  ModalBodyProps,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
} from '@chakra-ui/react';

interface ModalWrapperProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ModalWrapper: React.FC<ModalWrapperProps & ModalBodyProps> = ({
  isOpen,
  onClose,
  children,
  maxW = '380px',
  ...rest
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered closeOnEsc>
      <ModalOverlay />
      <ModalContent p={'24px 32px 48px'} borderRadius={'32px'} maxW={maxW}>
        <ModalCloseButton
          borderRadius={'100px'}
          mt="18px"
          mr="32px"
          border="1px solid"
          borderColor={'brandBlack.100'}
        />
        <ModalBody p="0" {...rest}>
          {children}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
