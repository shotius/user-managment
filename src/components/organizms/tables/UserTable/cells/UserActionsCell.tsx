import { HStack, IconButton } from '@chakra-ui/react';
import { Cell } from 'react-table';
import { SettingIcon } from 'src/components/icons/SettingIcon';
import { TrashBinIcon } from 'src/components/icons/TrashBinIcon';
import { ExampleObject } from 'src/types';
import { useUserTable } from '../useUserTable';

interface Props {
  handleSettingClick: () => void;
  handleDeleteClick?: () => void;
}

export const UserActionsCell: React.FC<Props> = ({ handleSettingClick }) => {
  return (
    <HStack justify={'end'}>
      <IconButton
        icon={<SettingIcon />}
        aria-label="settings"
        bg="white"
        size={'lg'}
        onClick={handleSettingClick}
      />
      <IconButton icon={<TrashBinIcon />} aria-label="deleteUser" bg="white" />
    </HStack>
  );
};
