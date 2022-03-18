import { Text, TextProps } from '@chakra-ui/react';
import { FONT_DEFAULT } from 'src/utils/constants';

interface TextMainProps {}

export const TextMain: React.FC<TextMainProps & TextProps> = ({
  color = '#26292E',
  fontFamily = { FONT_DEFAULT },
  children,
  ...rest
}) => {
  return (
    <Text color={color} fontFamily={fontFamily} fontWeight={700} {...rest}>
      {children}
    </Text>
  );
};
