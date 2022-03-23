import { Switch } from '@chakra-ui/react';
import { Cell } from 'react-table';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';
import { ExampleObject } from 'src/types';
import { useUserTable } from '../useUserTable';

export const UserStatusSwitch: React.FC<Cell<ExampleObject>> = (cell) => {
  const { checkIfActive } = useUserTable();

  return (
    <CenterVerticaly>
      <Switch size="md" pl="4" isChecked={checkIfActive(cell)} />
    </CenterVerticaly>
  );
};
