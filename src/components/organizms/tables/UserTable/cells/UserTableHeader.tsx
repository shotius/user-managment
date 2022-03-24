import { Button, HStack, Icon } from '@chakra-ui/react';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { DropdownIcon } from 'src/components/atoms/icons/DropdownIcon';

export const UserTableHeader = (props: any) => {
  const {
    column: { id, isSorted },
  } = props;
  return (
    <Button variant={'ghost'} _hover={{ background: 'transparent' }} px="2">
      <HStack opacity={isSorted ? 1 : 0.5}>
        <TextMain fontWeight={700}>{id.toUpperCase()}</TextMain>
        <Icon
          as={DropdownIcon}
          w="3"
          display={id === 'actions' ? 'none' : 'block'}
          transform={isSorted ? 'rotate(180deg)' : 'rotate(0deg)'}
        />
      </HStack>
    </Button>
  );
};
