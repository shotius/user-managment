import { Button, ButtonProps } from '@chakra-ui/react';

interface CreateButtonProps {}

export const CreateButton: React.FC<CreateButtonProps & ButtonProps> = ({
  ...rest
}) => {
  return (
    <Button
      w="50px"
      h="50px"
      borderRadius={'100px'}
      bg={'#2A84FF'}
      color="white"
      top="-50%"
      left="50%"
      transform={'translateX(-50%)'}
      position={'absolute'}
      fontSize="30px"
      fontWeight={'50'}
      {...rest}
    >
      +
    </Button>
  );
};
