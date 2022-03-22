import { ButtonProps, VStack } from '@chakra-ui/react';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { ButtonPrimary } from '../atoms/buttons/ButtonPrimary';

interface EditUserFormProps {
  SubmitButton: React.FC<ButtonProps>;
}

export const EditUserForm: React.FC<EditUserFormProps> = ({ SubmitButton }) => {
  return (
    <form style={{width: "100%"}}>
      <VStack>
        <InputOutLineWithIcon
          icon={<UserProfileIcon stroke="brandBlack.400" />}
        />
        <InputOutLineWithIcon icon={<LetterIcon stroke="brandBlack.400" />} />
        <InputOutLineWithIcon icon={<KeyIcon stroke="brandBlack.400" />} />
      </VStack>
      <SubmitButton type="submit" />
    </form>
  );
};
