import { HStack, Icon } from '@chakra-ui/react';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { KeyIcon } from 'src/components/atoms/icons/KeyIcon';
import { capitalize, isAdmin } from 'src/utils/functions';
import { Cell } from 'react-table';
import { IUserObject } from 'src/types';

export const UserRoleCell: React.FC<Cell<IUserObject>> = ({
  row: {
    original: { role },
  },
}) => (
  <CenterVerticaly>
    <HStack>
      <TextMain>{capitalize(role)}</TextMain>
      {isAdmin(role) ? <Icon as={KeyIcon} stroke="brandBlue.400" /> : null}
    </HStack>
  </CenterVerticaly>
);
