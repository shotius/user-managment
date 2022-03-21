import { Text, TextProps } from '@chakra-ui/react';
import { FONT_DEFAULT, SEMI_BOLD } from 'src/utils/constants';

interface TextMainProps {}

export const TextMain: React.FC<TextMainProps & TextProps> = ({
  color = 'brandBlack.400',
  fontFamily =  FONT_DEFAULT ,
  fontWeight = SEMI_BOLD,
  children,
  ...rest
}) => {
  return (
    <Text
      color={color}
      fontFamily={fontFamily}
      fontWeight={fontWeight}
      {...rest}
    >
      {children}
    </Text>
  );
};
