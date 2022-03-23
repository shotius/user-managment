import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ExampleObject } from 'src/types';
import { editUserSchema } from './validationSchema';

export const useEditUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExampleObject>({
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
