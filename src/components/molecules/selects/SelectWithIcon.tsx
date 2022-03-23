import {
  Box,
  FormControl,
  FormHelperText,
  Select,
  SelectProps,
} from '@chakra-ui/react';
import React, { forwardRef } from 'react';
import { ErrorText } from 'src/components/atoms/Typography/ErrorText';
interface SelectWithIconProps {
  leftIcon: any;
  error?: { message?: string };
}

export const SelectWithIcon = forwardRef<
  HTMLSelectElement,
  SelectWithIconProps & SelectProps
>(
  (
    { leftIcon: Icon, children, error, ...rest },
    ref: React.Ref<HTMLSelectElement>
  ) => {
    const message = error?.message;
    return (
      <FormControl isInvalid={!!message}>
        <Box position="relative" w="full">
          <Icon
            position="absolute"
            left="12px"
            stroke="brandBlack.400"
            top="50%"
            transform={'translateY(-50%)'}
          />
          <Select
            placeholder="Role"
            css={{
              paddingLeft: '40px',
              color: '#a2b0c1',
            }}
            ref={ref}
            {...rest}
          >
            {children}
          </Select>
        </Box>
        <FormHelperText>
          <ErrorText>{message}</ErrorText>
        </FormHelperText>
      </FormControl>
    );
  }
);
