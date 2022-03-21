import { Text, TextProps } from '@chakra-ui/react';

interface TextSecondaryProps {}

export const TextSecondary: React.FC<TextSecondaryProps & TextProps> = ({
  opacity = '0.6',
  color = 'brandBlack',
  fontSize = '14px',
  children,
  ...rest
}) => {
  return (
    <Text fontSize={fontSize} opacity={opacity} color={color} {...rest}>
      {children}
    </Text>
  );
};
