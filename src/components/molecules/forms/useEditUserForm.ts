import { addUser } from './../../../redux/features/users/usersSlice';
import { useAppDispatch } from 'src/redux/app/hooks';
import { userService } from 'src/services/user.services';
import { IFormUser } from 'src/types';
import { editUserSchema } from './validationSchema';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { ExampleObject } from 'src/types';
import { nanoid } from '@reduxjs/toolkit';

export const useEditUserForm = () => {
  const dispatch = useAppDispatch();
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
    dispatch(addUser(newUser))
      .then((data) => {
        console.log('data added', data)
        reset()
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
