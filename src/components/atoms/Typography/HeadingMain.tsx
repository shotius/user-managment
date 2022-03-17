import { Heading, HeadingProps } from '@chakra-ui/react';
import { FONT_DEFAULT } from 'src/utils/constants';

export const HeadingMain: React.FC<HeadingProps> = ({
  fontSize = '36px',
  children,
  ...rest
}) => {
  return (
    <Heading
      fontFamily={FONT_DEFAULT}
      fontSize={fontSize}
      {...rest}
    >
      {children}
    </Heading>
  );
};
