import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';

interface InputWithLeftIconProps {
  icon: any;
}

export const InputWithLeftIcon: React.FC<InputWithLeftIconProps> = ({
  icon: Icon,
}) => {
  return (
    <InputGroup w="auto">
      <InputLeftElement children={Icon} />
      <Input
        placeholder="Type to filter users..."
        border="1px solid lightGrey"
        borderRadius={'8px'}
      />
    </InputGroup>
  );
};
