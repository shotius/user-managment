import { HStack, IconButton } from '@chakra-ui/react';
import { SettingIcon } from 'src/components/icons/SettingIcon';
import { TrashBinIcon } from 'src/components/icons/TrashBinIcon';


export const UserActionsCell: any = () => (
  <HStack justify={'end'}>
    <IconButton
      icon={<SettingIcon />}
      aria-label="settings"
      bg="white"
      size={'lg'}
    />
    <IconButton icon={<TrashBinIcon />} aria-label="deleteUser" bg="white" />
  </HStack>
);
