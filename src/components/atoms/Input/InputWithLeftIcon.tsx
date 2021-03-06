import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import debounce from 'lodash.debounce';
import React, { useMemo } from 'react';
import { useAppDispatch } from 'src/redux/app/hooks';
import {
  setSearchWord
} from 'src/redux/features/users/usersSlice';

interface InputWithLeftIconProps {
  icon: any;
}

export const InputWithLeftIcon: React.FC<InputWithLeftIconProps> = ({
  icon: Icon,
}) => {
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
