import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserEditForm } from 'src/components/molecules/forms/useUserEditForm';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  closeUserSetupModal,
  openUserSetupModal,
  selectUserSetupModal
} from 'src/redux/features/modals/modalsSlice';
import { setUserForSetup } from 'src/redux/features/users/usersSlice';
import { ExampleObject } from 'src/types';
import { updateUser } from './../../../../redux/features/users/usersSlice';
import { useUserTable } from './../../tables/UserTable/useUserTable';

export const useUserSetupModal = () => {
  const userForSetup = useAppSelector((state) => state.users.selectedUser);
  const isOpen = useAppSelector(selectUserSetupModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isActive = userForSetup?.status === 'active';

  // Open Modal on Page load
  useEffect(() => {
    onOpen();
  }, []);

  // if User is not selected  -> close the modal
  if (!userForSetup) {
    onClose();
  }

  const { handleSubmit, reset, isSubmitting, errors, register } =
    useUserEditForm({
      defaultValues: userForSetup,
    });

  const { handleToggleStatus } = useUserTable();

  function onOpen() {
    dispatch(openUserSetupModal());
  }

  function closeModal() {
    dispatch(closeUserSetupModal());
  }

  function removeSelectedUser() {
    dispatch(setUserForSetup(undefined));
  }

  function onClose() {
    closeModal();
    removeSelectedUser();
    navigate('/');
  }

  function handleError(error: unknown) {
    console.log('unhandled error: ', error);
  }

  const onSubmit = handleSubmit((data: ExampleObject) => {
    dispatch(updateUser(data)).then(onClose).catch(handleError);
    reset();
  });

  return {
    isOpen,
    onClose,
    isActive,
    isSubmitting,
    errors,
    onSubmit,
    register,
    handleToggleStatus,
    userForSetup,
  };
};
