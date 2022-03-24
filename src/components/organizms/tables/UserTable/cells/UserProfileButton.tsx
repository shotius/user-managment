import { useState } from 'react';
import { ButtonIconRound } from 'src/components/atoms/buttons/ButtonIconRound';
import { UserProfileIcon } from 'src/components/atoms/icons/UserProfileIcon';

interface UserProfileButtonProps {}

export const UserProfileButton: React.FC<UserProfileButtonProps> = ({}) => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <ButtonIconRound
      aria-label="userProfile"
      isSelected={isSelected}
      icon={<UserProfileIcon stroke={isSelected ? '#fff' : 'brandBlack.400'} />}
      onClick={() => setIsSelected((val) => !val)}
    />
  );
};
