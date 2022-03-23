import { ButtonProps, VStack } from '@chakra-ui/react';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { SelectWithIcon } from '../selects/SelectWithIcon';
import { useEditUserForm } from './useEditUserForm';

interface EditUserFormProps {
  SubmitButton: React.FC<ButtonProps>;
}

export const EditUserForm: React.FC<EditUserFormProps> = ({ SubmitButton }) => {
  const { register, errors, onSubmit, isSubmitting } = useEditUserForm();

  return (
    <form className="edit-user-form" onSubmit={onSubmit}>
      <VStack>
        <InputOutLineWithIcon
          {...register('user')}
          icon={<UserProfileIcon stroke="brandBlack.400" />}
          placeholder="Full name"
          error={errors.user}
        />

        <InputOutLineWithIcon
          {...register('email')}
          icon={<LetterIcon stroke="brandBlack.400" />}
          placeholder="E-mail"
          error={errors.email}
        />
        <SelectWithIcon
          error={errors.role}
          leftIcon={KeyIcon}
          {...register('role')}
        >
          <option value={'user'}>User</option>
          <option value={'admin'}>Admin</option>
        </SelectWithIcon>
      </VStack>
      <SubmitButton type="submit" isLoading={isSubmitting} />
    </form>
  );
};
