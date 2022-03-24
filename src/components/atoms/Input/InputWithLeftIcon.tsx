import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  selectSearchWord,
  setSearchWord,
} from 'src/redux/features/users/usersSlice';

interface InputWithLeftIconProps {
  icon: any;
}

export const InputWithLeftIcon: React.FC<InputWithLeftIconProps> = ({
  icon: Icon,
}) => {
  const searchWord = useAppSelector(selectSearchWord);
  const dispatch = useAppDispatch();

  function handleChange(e: React.SyntheticEvent<HTMLInputElement>) {
    dispatch(setSearchWord(e.currentTarget.value));
  }

  return (
    <InputGroup w="auto">
      <InputLeftElement children={Icon} opacity={0.8} />
      <Input
        placeholder="Type to filter users..."
        border="1px solid lightGrey"
        borderRadius={'8px'}
        value={searchWord}
        onChange={handleChange}
      />
    </InputGroup>
  );
};
