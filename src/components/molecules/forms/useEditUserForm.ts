import { userService } from 'src/services/user.services';
import { IFormUser } from 'src/types';
import { editUserSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ExampleObject } from 'src/types';
import { nanoid } from '@reduxjs/toolkit';

export const useEditUserForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ExampleObject>({
    resolver: yupResolver(editUserSchema),
  });

  const formatUser = (data: IFormUser): ExampleObject => {
    return { id: nanoid(), status: 'active', ...data };
  };

  const handleError = (error: unknown) => {
    console.log(error);
  };

  const onSubmit = handleSubmit(async (data: IFormUser) => {
    const newUser = formatUser(data);
    userService
      .addUser(newUser)
      .then(() => {
        reset();
        userService.getUsers();
      })
      .catch(handleError);
  });

  return {
    register,
    errors,
    onSubmit,
    isSubmitting,
  };
};
