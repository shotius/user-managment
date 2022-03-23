import {
  FormControl,
  FormHelperText,
  IconButtonProps,
  Input,
  InputGroup,
  InputLeftElement,
  InputProps,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { ErrorText } from '../Typography/ErrorText';

interface InputOutLineWithIconProps {
  icon: IconButtonProps['icon'];
  error?: { message?: string };
}

export const InputOutLineWithIcon = forwardRef<
  HTMLInputElement,
  InputOutLineWithIconProps & InputProps
>(({ icon: Icon, error, ...rest }, ref: React.Ref<HTMLInputElement>) => {
  const message = error?.message;
  return (
    <FormControl isInvalid={!!message}>
      <InputGroup>
        <InputLeftElement pointerEvents="none" children={Icon} />
        <Input
          border="1px solid"
          borderColor="brandBlack.100"
          borderRadius="8px"
          ref={ref}
          {...rest}
        />
      </InputGroup>
      <FormHelperText>
        <ErrorText>{message}</ErrorText>
      </FormHelperText>
    </FormControl>
  );
});
