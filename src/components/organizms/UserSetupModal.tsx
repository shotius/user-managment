import {
  Box,
  Button,
  ButtonProps,
  Center,
  Divider,
  HStack,
  ModalHeader,
  Switch,
  VStack,
} from '@chakra-ui/react';
import { useMemo, useState } from 'react';
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

export const UserSetupModal: React.FC<UserSetupModalProps> = (props) => {
  const [isActive, setIsActive] = useState(true);

  // Submit button for user form
  // it is button or null depenging on active state 
  const SubmitButton = useMemo(
    () => (props: ButtonProps) => {
      if (isActive) {
        return <ButtonPrimary {...props}>Save Changes</ButtonPrimary>;
      } else {
        return null;
      }
    },
    [isActive]
  );
  return (
    <ModalWrapper {...props} opacity={isActive ? 1 : '0.5'}>
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
          display={isActive ? 'inline-block' : 'none'}
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
            <Switch
              defaultChecked
              onChange={() => {
                setIsActive((val) => !val);
              }}
            />
          </HStack>
        </HStack>
        {/* Edit user form  */}
        <EditUserForm SubmitButton={SubmitButton} />
      </VStack>
    </ModalWrapper>
  );
};
