import { VStack } from '@chakra-ui/react';
import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { ButtonPrimary } from 'src/components/atoms/buttons/ButtonPrimary';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { SelectWithIcon } from '../selects/SelectWithIcon';

interface EditUserFormProps {
  submitButtonText: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: any;
  errors: ReturnType<typeof useForm>['formState']['errors'];
  isSubmitting: ReturnType<typeof useForm>['formState']['isSubmitting'];
}

export const EditUserForm: React.FC<EditUserFormProps> = ({
  submitButtonText,
  onSubmit,
  register,
  errors,
  isSubmitting,
}) => {
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
      <ButtonPrimary type="submit" isLoading={isSubmitting}>
        {submitButtonText}
      </ButtonPrimary>
    </form>
  );
};
