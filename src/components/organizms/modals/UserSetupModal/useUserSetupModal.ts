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

export const useUserSetupModal = () => {
  const [isActive, setIsActive] = useState(true);

  const isOpen = useAppSelector(selectUserSetupModal);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { handleSubmit, reset, isSubmitting, errors, register } = useUserEditForm();

  const onOpen = () => dispatch(openUserSetupModal());

  const onClose = () => {
    dispatch(closeUserSetupModal());
    navigate('/');
  };

  useEffect(() => {
    onOpen();
  }, []);

  const onSubmit = handleSubmit((data: ExampleObject) => {
    console.log('data: ', data);
    reset();
  });

  return {
    isOpen,
    onClose,
    isActive,
    setIsActive,
    isSubmitting,
    errors,
    onSubmit, 
    register
  };
};
