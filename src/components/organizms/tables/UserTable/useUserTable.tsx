import { useNavigate } from 'react-router-dom';
import {
  Cell,
  Hooks,
  useFlexLayout,
  usePagination,
  useRowSelect,
  useSortBy,
  useTable,
} from 'react-table';
import { CreateButton } from 'src/components/atoms/buttons/CreateButton';
import { useAppDispatch } from 'src/redux/app/hooks';
import { updateUser } from 'src/redux/features/users/usersSlice';
import { IUserObject } from 'src/types';
import { UserActionHeaderCell } from './cells/UserActionHeaderCell';
import { UserActionsCell } from './cells/UserActionsCell';
import { UserProfileButton } from './cells/UserProfileButton';
import { useUserTableData } from './useUserTableData';

export const useUserTable = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { data, columns } = useUserTableData();

  // react-hook-table: Generate table
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    // pagination
    prepareRow,
    setPageSize,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    state: { pageSize, pageIndex },
  } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout,
    useSortBy,
    usePagination,
    useRowSelect,
    getAdditionalColumns
  );

  function handleError(error: unknown) {
    console.log('unhandled error: ', error);
  }

  function handleToggleStatus(user: IUserObject) {
    const toggledObj: IUserObject = {
      ...user,
      status: user.status === 'active' ? 'inactive' : 'active',
    };
    dispatch(updateUser(toggledObj)).catch(handleError);
  }

  function checkIfActive(cell: Cell<IUserObject, any>) {
    const status = cell.row.original.status;
    return status === 'active';
  }

  // Adding some columns to the table
  function getAdditionalColumns(hooks: Hooks<IUserObject>) {
    hooks.visibleColumns.push((columns) => [
      {
        // Selection - first column
        id: 'selection',
        maxWidth: 80,
        Header: () => <CreateButton onClick={() => navigate('/invite-user')} />,
        Cell: ({ row }) => {
          return <UserProfileButton {...row.getToggleRowSelectedProps()} />;
        },
      },
      ...columns,
      {
        // Actions collumn
        id: 'actions',
        Header: UserActionHeaderCell,
        Cell: UserActionsCell,
      },
    ]);
  }

  function scrollTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  function withScroll(fn: any) {
    return () => {
      scrollTop();
      fn();
    };
  }

  return {
    data,
    columns,
    getAdditionalColumns,
    checkIfActive,
    handleToggleStatus,
    withScroll,
    getTableProps,
    getTableBodyProps,
    scrollTop,
    headerGroups,
    page,
    prepareRow,
    setPageSize,
    nextPage,
    previousPage,
    gotoPage,
    pageCount,
    pageSize,
    pageIndex,
  };
};
