import {
  Avatar,
  Box,
  Button,
  ButtonProps,
  Center,
  Divider,
  HStack,
  ModalHeader,
  Switch,
  Text,
  VStack,
} from '@chakra-ui/react';
import { ButtonPrimary } from '../atoms/buttons/ButtonPrimary';
import { TextMain } from '../atoms/Typography/TextMain';
import { TextSecondary } from '../atoms/Typography/TextSecondary';
import { KeyIcon } from '../icons/KeyIcon';
import { UserProfileIcon } from '../icons/UserProfileIcon';
import { EditUserForm } from '../molecules/EditUserForm';
import { ModalWrapper } from '../molecules/modals/ModalWrapper';

interface UserSetupModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const SubmitButton = (props: ButtonProps) => (
  <ButtonPrimary {...props}>Save Changes</ButtonPrimary>
);

export const UserSetupModal: React.FC<UserSetupModalProps> = (props) => {
  return (
    <ModalWrapper {...props}>
      <VStack p="0" align="start" spacing="0" pb="24px">
        <ModalHeader p="0">User Setup</ModalHeader>
        <TextSecondary>information and settings</TextSecondary>
      </VStack>
      <VStack
        spacing={4}
        border={'1px solid'}
        borderRadius="12px"
        borderColor={'brandBlack.100'}
        p="4"
      >
        <HStack w="full" spacing="4">
          <Center
            w="48px"
            h="48px"
            borderRadius={'100px'}
            border="1px solid"
            borderColor={'brandBlack.100'}
          >
            <UserProfileIcon stroke="brandBlack.400" />
          </Center>
          <VStack spacing="0" align="start">
            <TextMain>
              Name Lastname <KeyIcon ml="1" stroke="brandBlue.400" />
            </TextMain>
            <TextSecondary>mail@mail.com</TextSecondary>
          </VStack>
        </HStack>
        <Button
          colorScheme={'blue'}
          variant="ghost"
          w="full"
          bg="blue.50"
          _hover={{ filter: 'brightness(105%)' }}
        >
          Resend the invitation
        </Button>
        <Divider />
        <HStack w="full" justify={'space-between'}>
          <TextMain>Details</TextMain>
          <HStack>
            <TextMain fontSize="12px" opacity={'0.8'}>
              the user is <b>Active</b>
            </TextMain>
            <Switch defaultChecked />
          </HStack>
        </HStack>
        <EditUserForm SubmitButton={SubmitButton} />
      </VStack>
    </ModalWrapper>
  );
};
