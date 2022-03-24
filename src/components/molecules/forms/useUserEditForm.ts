import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { IUserObject } from 'src/types';
import { editUserSchema } from './validationSchema';

type FormProps = Parameters<typeof useForm>[0];

export const useUserEditForm = (props: FormProps | void) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<IUserObject>({
    ...props,
    resolver: yupResolver(editUserSchema),
  });

  return {
    register,
    errors,
    reset,
    isSubmitting,
    handleSubmit,
  };
};
