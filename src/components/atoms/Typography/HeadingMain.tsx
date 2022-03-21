import { Heading, HeadingProps } from '@chakra-ui/react';
import { BOLD, FONT_DEFAULT } from 'src/utils/constants';

export const HeadingMain: React.FC<HeadingProps> = ({
  fontSize = '36px',
  fontWeight = BOLD,
  fontFamily = FONT_DEFAULT,
  color = 'brandBlack.400',
  children,
  ...rest
}) => {
  return (
    <Heading
      fontFamily={fontFamily}
      fontSize={fontSize}
      fontWeight={fontWeight}
      color={color}
      {...rest}
    >
      {children}
    </Heading>
  );
};
