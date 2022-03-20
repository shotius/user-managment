import { Switch } from '@chakra-ui/react';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';

export const UserStatusSwitch: any = ({ row: { original } }) => (
  <CenterVerticaly>
    <Switch size="md" pl="4" defaultChecked={original.isActive} />
  </CenterVerticaly>
);
