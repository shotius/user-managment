import { Switch } from '@chakra-ui/react';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';
import { useUserTable } from '../useUserTable';

export const UserStatusSwitch: any = (cell) => {
  const { row: { original } } = cell
  const {checkIfActive} = useUserTable()
  return (
    <CenterVerticaly>
      <Switch size="md" pl="4" defaultChecked={checkIfActive(cell)} />
    </CenterVerticaly>
  );
};
