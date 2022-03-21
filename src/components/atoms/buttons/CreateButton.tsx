import { Button, ButtonProps } from '@chakra-ui/react';

interface CreateButtonProps {}

export const CreateButton: React.FC<CreateButtonProps & ButtonProps> = ({
  onClick, ...rest
}) => {
  return (
    <Button
      w="70px"
      h="70px"
      borderRadius={'100px'}
      bg={'#2A84FF'}
      color="white"
      top="-50%"
      left="0"
      position={'absolute'}
      fontSize="30px"
      fontWeight={'50'}
      _hover={{
        background: "#2A84FF", 
        filter: "brightness(120%)"
      }}
      _active={{
        filter: "brightness(100%)", 
      }}
      {...rest}
    >
      +
    </Button>
  );
};
