import { useUserTable } from 'src/components/organizms/tables/UserTable/useUserTable';
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
    scrollTop, 
  } = useUserTable();

  const pageNumbersToShow = generatePagesToShow(pageCount, pageIndex)

  return {
    pageSize,
    setPageSize,
    pageIndex,
    withScroll,
    previousPage,
    scrollTop, 
    pageCount,
    gotoPage,
    nextPage,
    pageNumbersToShow,
  };
};
