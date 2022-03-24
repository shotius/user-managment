import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import React, { useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  selectSearchWord,
  setSearchWord,
} from 'src/redux/features/users/usersSlice';
import debounce from 'lodash.debounce';

interface InputWithLeftIconProps {
  icon: any;
}

export const InputWithLeftIcon: React.FC<InputWithLeftIconProps> = ({
  icon: Icon,
}) => {
  const searchWord = useAppSelector(selectSearchWord);
  const dispatch = useAppDispatch();

  function changeHandler(e: React.SyntheticEvent<HTMLInputElement>) {
    dispatch(setSearchWord((e.target as HTMLInputElement).value));
  }

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300)
  , []);

  return (
    <InputGroup w="auto">
      <InputLeftElement children={Icon} opacity={0.8} />
      <Input
        placeholder="Type to filter users..."
        border="1px solid lightGrey"
        borderRadius={'8px'}
        onChange={debouncedChangeHandler}
      />
    </InputGroup>
  );
};
