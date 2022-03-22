import {
  IconButtonProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react';
import { KeyIcon } from 'src/components/icons/KeyIcon';

interface InputOutLineWithIconProps {
  icon: IconButtonProps['icon'];
}

export const InputOutLineWithIcon: React.FC<
  InputOutLineWithIconProps & InputProps
> = ({ icon: Icon, ...rest }) => {
  return (
    <InputGroup>
      <InputLeftElement pointerEvents="none" children={Icon} />

      <Input
        border="1px solid"
        borderColor="brandBlack.100"
        borderRadius="8px"
        {...rest}
      />
    </InputGroup>
  );
};
