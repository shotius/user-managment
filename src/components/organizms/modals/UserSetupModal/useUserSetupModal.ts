import { ExampleObject } from 'src/types';
import { useUserEditForm } from 'src/components/molecules/forms/useUserEditForm';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  closeUserSetupModal,
  openUserSetupModal,
  selectUserSetupModal,
} from 'src/redux/features/modals/modalsSlice';
import { setUserForSetup } from 'src/redux/features/users/usersSlice';

export const useUserSetupModal = () => {
  const [isActive, setIsActive] = useState(true);
  const userForSetup = useAppSelector(state => state.users.selectedUser)
  const isOpen = useAppSelector(selectUserSetupModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { handleSubmit, reset, isSubmitting, errors, register } =
    useUserEditForm({
      defaultValues: userForSetup,
    });

  const onOpen = () => dispatch(openUserSetupModal());

  const closeModal = () => dispatch(closeUserSetupModal());

  const removeSelectedUser = () => dispatch(setUserForSetup(undefined));

  const onClose = () => {
    closeModal();
    removeSelectedUser();
    navigate('/');
  };

  const onSubmit = handleSubmit((data: ExampleObject) => {
    console.log('data: ', data);
    reset();
  });

  // Open Modal on Page load
  useEffect(() => {
    onOpen();
  }, []);

  return {
    isOpen,
    onClose,
    isActive,
    setIsActive,
    isSubmitting,
    errors,
    onSubmit,
    register,
  };
};
