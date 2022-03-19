import { Button, HStack, Icon } from "@chakra-ui/react";
import { TextMain } from "src/components/atoms/Typography/TextMain";
import { DropdownIcon } from "src/components/icons/DropdownIcon";

export const UserTableHeader = ({ column: { id } }) => (
  <Button variant={'ghost'} _hover={{ background: 'transparent' }} px="2">
    <HStack>
      <TextMain fontWeight={700}>{id.toUpperCase()}</TextMain>
      <Icon as={DropdownIcon} w="3" />
    </HStack>
  </Button>
);