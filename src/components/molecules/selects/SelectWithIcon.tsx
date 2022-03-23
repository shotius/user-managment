import { Box, Select, SelectProps } from '@chakra-ui/react';
interface SelectWithIconProps {
  leftIcon: any;
}

export const SelectWithIcon: React.FC<SelectWithIconProps & SelectProps> = ({
  leftIcon: Icon,
  children,
  ...rest
}) => {
  return (
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
        {...rest}
      >
        {children}
      </Select>
    </Box>
  );
};
