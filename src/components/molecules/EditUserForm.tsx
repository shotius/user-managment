import { Box, ButtonProps, Select, VStack } from '@chakra-ui/react';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { ButtonPrimary } from '../atoms/buttons/ButtonPrimary';
import { SelectWithIcon } from './selects/SelectWithIcon';

interface EditUserFormProps {
  SubmitButton: React.FC<ButtonProps>;
}

export const EditUserForm: React.FC<EditUserFormProps> = ({ SubmitButton }) => {
  return (
    <form className="edit-user-form">
      <VStack>
        <InputOutLineWithIcon
          icon={<UserProfileIcon stroke="brandBlack.400" />}
          placeholder="Full name"
        />
        <InputOutLineWithIcon
          icon={<LetterIcon stroke="brandBlack.400" />}
          placeholder="E-mail"
        />
        <SelectWithIcon leftIcon={KeyIcon}>
          <option value={'user'}>User</option>
          <option value={'admin'}>Admin</option>
        </SelectWithIcon>
      </VStack>
      <SubmitButton type="submit" />
    </form>
  );
};
