import { IUserObject } from './../../../../types';
import { useEffect, useMemo, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'src/redux/app/hooks';
import {
  getUsers,
  selectSearchWord,
} from 'src/redux/features/users/usersSlice';
import { IUserTableColumn } from 'src/types';
import { UserInfoCell } from './cells/UserInfoCell';
import { UserRoleCell } from './cells/UserRoleCell';
import { UserStatusSwitch } from './cells/UserStatusSwitch';
import { UserTableHeader } from './cells/UserTableHeader';

export const useUserTableData = () => {
  const users = useAppSelector((state) => state.users.users);
  const searchWord = useAppSelector(selectSearchWord);
  const dispatch = useAppDispatch();
  const [data, setData] = useState(users);

  useEffect(() => {
    if (!data.length) {
      dispatch(getUsers());
    }
  }, []);

  useEffect(() => {
    setData(users);
  }, [users]);

  useEffect(() => {
    users && setData(filterUsersByString(users, searchWord));
  }, [searchWord]);

  // create collumns
  const columns = useMemo<IUserTableColumn[]>(
    () => [
      {
        width: 450,
        Header: UserTableHeader,
        accessor: 'user',
        Cell: UserInfoCell,
      },
      {
        Header: UserTableHeader,
        accessor: 'role',
        Cell: UserRoleCell,
      },
      {
        Header: UserTableHeader,
        accessor: 'status',
        Cell: UserStatusSwitch,
      },
    ],
    []
  );

  function filterUsersByString(arr: IUserObject[], str: string) {
    return arr.filter((val) =>
      val.user.toLocaleLowerCase().includes(str.toLocaleLowerCase())
    );
  }

  return { data, columns };
};
