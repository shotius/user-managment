import { IconButton } from '@chakra-ui/react';
import { useState } from 'react';
import { UserProfileIcon } from 'src/components/icons/UserProfileIcon';

interface UserProfileButtonProps {}

export const UserProfileButton: React.FC<UserProfileButtonProps> = ({}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <IconButton
      borderRadius={'100px'}
      bg={isSelected ? '#2A84FF' : 'transparent'}
      border="1px solid rgba(38, 41, 46, 0.1);"
      _hover={{
        background: isSelected ? '#2A84FF' : 'transparent',
      }}
      icon={<UserProfileIcon stroke={isSelected ? 'white' : '#292d32'} />}
      aria-label="userProfile"
      onClick={() => setIsSelected((val) => !val)}
    />
  );
};
