import { Flex, FlexProps } from '@chakra-ui/react';

interface CenterCerticalyProps {}

export const CenterVerticaly: React.FC<CenterCerticalyProps & FlexProps> = ({
  children,
  ...rest
}) => {
  return (
    <Flex w="full" h="full" align={'center'} {...rest}>
      {children}
    </Flex>
  );
};
