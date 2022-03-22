import { Button, ButtonProps } from '@chakra-ui/react';

interface ButtonPrimaryProps {}

export const ButtonPrimary: React.FC<ButtonPrimaryProps & ButtonProps> = ({
  children,
  bg = 'brandBlue.400',
  color = 'white',
  w = 'full',
  borderRadius = '8px',
  mt = '24px',
  p = '16px',
  lineHeight = '24px',
  fontWeight = 'light',
  ...rest
}) => {
  return (
    <Button
      bg={bg}
      _hover={{
        background: bg,
        filter: 'brightness(120%)',
      }}
      _active={{
        filter: 'brightness(100%)',
      }}
      color={color}
      w={w}
      borderRadius={borderRadius}
      fontWeight={fontWeight}
      mt={mt}
      p={p}
      lineHeight={lineHeight}
      {...rest}
    >
      {children}
    </Button>
  );
};
