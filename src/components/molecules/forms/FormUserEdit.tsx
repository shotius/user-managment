import { VStack } from '@chakra-ui/react';
import { FormEventHandler } from 'react';
import { useForm } from 'react-hook-form';
import { InputOutLineWithIcon } from 'src/components/atoms/Input/InputOutLineWithIcon';
import { KeyIcon } from 'src/components/icons/KeyIcon';
import { LetterIcon } from 'src/components/icons/LetterIcon';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';
import { SelectWithIcon } from '../selects/SelectWithIcon';

interface FormUserEditProps {
  submitButton: React.ReactElement;
  onSubmit: FormEventHandler<HTMLFormElement>;
  register: any;
  errors: ReturnType<typeof useForm>['formState']['errors'];
}

export const FormUserEdit: React.FC<FormUserEditProps> = ({
  submitButton,
  onSubmit,
  register,
  errors,
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
      {submitButton}
    </form>
  );
};
