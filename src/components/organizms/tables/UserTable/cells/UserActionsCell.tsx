import { HStack, IconButton } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Cell } from 'react-table';
import { SettingIcon } from 'src/components/atoms/icons/SettingIcon';
import { TrashBinIcon } from 'src/components/atoms/icons/TrashBinIcon';
import { useAppDispatch } from 'src/redux/app/hooks';
import { setUserForSetup } from 'src/redux/features/users/usersSlice';
import { ExampleObject } from 'src/types';

export const UserActionsCell: React.FC<Cell<ExampleObject>> = ({
  row: { original: user },
}) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const selectUser = (data: ExampleObject) => dispatch(setUserForSetup(data));
  
  function handleSettingClick(user: ExampleObject) {
    selectUser(user);
    navigate('/setup-user');
  }

  function handleDeleteClick(user: ExampleObject) {
    selectUser(user);
    navigate('/delete-user');
  }

  return (
    <HStack justify={'end'}>
      <IconButton
        icon={<SettingIcon />}
        aria-label="settings"
        bg="white"
        size={'lg'}
        onClick={() => handleSettingClick(user)}
      />
      <IconButton
        icon={<TrashBinIcon />}
        aria-label="deleteUser"
        bg="white"
        onClick={() => handleDeleteClick(user)}
      />
    </HStack>
  );
};
