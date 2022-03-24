import { IUserObject } from './../../../../types';
import { useUserTable } from './../../tables/UserTable/useUserTable';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  closeUserDeleteModal,
  openUserDeleteModal,
  selectUserDeleteModal,
} from 'src/redux/features/modals/modalsSlice';
import { deleteUser, selectUser } from 'src/redux/features/users/usersSlice';

export const useUserDeleteModal = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [isDeleting, setIsDeleting] = useState(false);

  const user = useAppSelector(selectUser);
  const { checkIfActive } = useUserTable();

  const isOpen = useAppSelector(selectUserDeleteModal);
  const onClose = () => {
    dispatch(closeUserDeleteModal());
    navigate('/');
  };

  useEffect(() => {
    dispatch(openUserDeleteModal());
  }, []);

  function handleError(error: unknown) {
    console.log('unhandled error: ', error);
  }

  function deleteSuccess() {
    onClose();
  }

  function handleDelete(user: IUserObject) {
    setIsDeleting(true);
    dispatch(deleteUser(user.id)).then(deleteSuccess).catch(handleError);
  }

  return {
    isOpen,
    onClose,
    user,
    checkIfActive,
    handleDelete,
    isDeleting,
  };
};
