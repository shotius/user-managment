import {
  Button,
  Center,
  Divider,
  HStack,
  ModalHeader,
  Switch,
  VStack,
} from '@chakra-ui/react';
import { ButtonPrimary } from 'src/components/atoms/buttons/ButtonPrimary';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { KeyIcon } from 'src/components/atoms/icons/KeyIcon';
import { UserProfileIcon } from 'src/components/atoms/icons/UserProfileIcon';
import { FormUserEdit } from 'src/components/molecules/forms/FormUserEdit';
import { ModalWrapper } from 'src/components/molecules/modals/ModalWrapper';
import { useUserSetupModal } from './useUserSetupModal';

interface UserSetupModalProps {}

export const UserSetupModal: React.FC<UserSetupModalProps> = () => {
  const {
    isOpen,
    onClose,
    isActive,
    userForSetup,
    handleToggleStatus,
    ...formProps
  } = useUserSetupModal();

  if (!userForSetup) {
    onClose();
    return null;
  }

  return (
    <ModalWrapper isOpen={isOpen} onClose={onClose}>
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
        opacity={isActive ? 1 : '0.5'}
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
              {userForSetup ? userForSetup.user : '-'}
              <KeyIcon ml="1" stroke="brandBlue.400" />
            </TextMain>
            <TextSecondary>
              {userForSetup ? userForSetup.email : '-'}
            </TextSecondary>
          </VStack>
        </HStack>
        <Button
          display={isActive ? 'inline-block' : 'none'}
          colorScheme={'blue'}
          variant="ghost"
          w="full"
          bg="blue.50"
          _hover={{ filter: 'brightness(105%)' }}
          onClick={onClose}
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
              isChecked={userForSetup?.status === 'active'}
              onChange={() => handleToggleStatus(userForSetup)}
            />
          </HStack>
        </HStack>
        {/* Edit user form  */}
        <FormUserEdit
          {...formProps}
          submitButton={
            <ButtonPrimary
              display={isActive ? 'inline-flex' : 'none'}
              type="submit"
              isLoading={formProps.isSubmitting}
            >
              Save Changes
            </ButtonPrimary>
          }
        />
      </VStack>
    </ModalWrapper>
  );
};
