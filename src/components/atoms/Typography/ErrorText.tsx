import { Text, TextProps } from '@chakra-ui/react';

interface ErrorTextProps {}

export const ErrorText: React.FC<ErrorTextProps & TextProps> = ({
  color = 'red',
  fontSize = '12px',
  children,
  ...rest
}) => {
  return (
    <Text color={color} fontSize={fontSize} {...rest}>
      {children}
    </Text>
  );
};
