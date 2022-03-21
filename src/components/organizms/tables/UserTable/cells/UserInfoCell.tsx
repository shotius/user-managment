import { VStack } from '@chakra-ui/react';
import { CellProps } from 'react-table';
import { CenterVerticaly } from 'src/components/atoms/templates/CenterCerticaly';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { TextSecondary } from 'src/components/atoms/Typography/TextSecondary';
import { ExampleObject } from 'src/types';

export const UserInfoCell: React.FC<CellProps<ExampleObject>> = ({
  row: { original },
}) => {
  return (
    <CenterVerticaly>
      <VStack align={'flex-start'} spacing="1" px="2">
        <TextMain>{original.user}</TextMain>
        <TextSecondary>{original.email}</TextSecondary>
      </VStack>
    </CenterVerticaly>
  );
};
