import { HStack, Icon } from '@chakra-ui/react';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { KeyIcon } from 'src/components/icons/KeyIcon';

export const UserRoleCell: any = ({ row: { original } }) => (
  <CenterVerticaly>
    <HStack>
      <TextMain>{original.role}</TextMain>
      {original.role === 'Admin' ? <Icon as={KeyIcon} /> : null}
    </HStack>
  </CenterVerticaly>
);
