import { useRef } from 'react';
import { useUserTable } from 'src/components/organizms/tables/UserTable/useUserTable';
import { mergeSortedArrays, range } from 'src/utils/functions';
import { usePagination } from 'src/utils/hooks/usePagination';

export const useUserTablePagination = () => {
  const { generatePagesToShow } = usePagination();
  const {
    pageSize,
    pageCount,
    pageIndex,
    setPageSize,
    withScroll,
    previousPage,
    gotoPage,
    nextPage,
  } = useUserTable();

  // const pageIndex = 0

  const pageNumbersToShow = generatePagesToShow(pageCount, pageIndex)
  // const pageNumbersToShow = generatePagesToShow(20, pageIndex)


  return {
    pageSize,
    setPageSize,
    pageIndex,
    withScroll,
    previousPage,
    pageCount,
    gotoPage,
    nextPage,
    pageNumbersToShow,
  };
};
