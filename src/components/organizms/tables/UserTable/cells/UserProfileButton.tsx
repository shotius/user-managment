import { IconButton } from '@chakra-ui/react';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';

interface UserProfileButtonProps {}

export const UserProfileButton: React.FC<UserProfileButtonProps> = ({}) => {
  return (
    <IconButton
      borderRadius={'100px'}
      bg="transparent"
      border="1px solid rgba(38, 41, 46, 0.1);"
      _hover={{
        background: 'transparent',
      }}
      icon={<UserProfileIcon />}
      aria-label="userProfile"
    />
  );
};
