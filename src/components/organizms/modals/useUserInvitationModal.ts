import { useUserEditForm } from 'src/components/molecules/forms/useUserEditForm';
import { nanoid } from '@reduxjs/toolkit';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  closeInviteModal,
  openInviteModal,
  selectInviteModal,
} from 'src/redux/features/modals/modalsSlice';
import { ExampleObject, IFormUser } from 'src/types';
import { addUser } from './../../../redux/features/users/usersSlice';

export const useUserInvitationModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, reset, ...hookFormRest } = useUserEditForm();

  const isOpen = useAppSelector(selectInviteModal);

  // Open modal on the page load
  useEffect(() => {
    onOpen();
  }, []);

  const onOpen = () => dispatch(openInviteModal());

  const onClose = () => {
    dispatch(closeInviteModal());
    navigate('/');
  };

  const formatUser = (data: IFormUser): ExampleObject => {
    return { id: nanoid(), status: 'active', ...data };
  };

  const handleError = (error: unknown) => {
    console.log(error);
  };

  const onSubmit = handleSubmit(async (data: IFormUser) => {
    const newUser = formatUser(data);
    dispatch(addUser(newUser))
      .then(() => {
        onClose();
        reset();
      })
      .catch(handleError);
  });

  return {
    isOpen,
    onClose,
    onSubmit,
    ...hookFormRest,
  };
};
