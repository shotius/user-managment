import { HStack, Select } from '@chakra-ui/react';
import { ButtonIconRound } from 'src/components/atoms/buttons/ButtonIconRound';
import { ButtonPagin } from 'src/components/atoms/buttons/PaginButton';
import { DropdownIcon } from 'src/components/atoms/icons/DropdownIcon';
import { TextMain } from 'src/components/atoms/Typography/TextMain';
import { useUserTablePagination } from './useUserTablePagination';

interface PaginationProps {}

export const UserTablePagination: React.FC<PaginationProps> = ({}) => {
  const {
    pageSize,
    setPageSize,
    pageIndex,
    withScroll,
    previousPage,
    pageCount,
    gotoPage,
    nextPage,
    pageNumbersToShow,
  } = useUserTablePagination();

  return (
    <HStack w="full" justify="space-between">
      <HStack w="220px" justify="space-between">
        <TextMain wordBreak={'keep-all'}>Records on page</TextMain>
        <Select
          w="80px"
          value={pageSize}
          onChange={(e) => setPageSize(+e.currentTarget.value)}
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={20}>20</option>
        </Select>
      </HStack>
      <HStack>
        <ButtonIconRound
          isDisabled={pageIndex === 0}
          aria-label="go preview page"
          onClick={withScroll(previousPage)}
          icon={<DropdownIcon transform={'rotate(90deg)'} />}
        />
        {pageNumbersToShow.map((page) => {
          if (page === 'dots') {
            return <TextMain key={page}>...</TextMain>;
          } else {
            return (
              <ButtonPagin
                key={page}
                isActive={pageIndex === page}
                onClick={() => withScroll(gotoPage(page))}
              >
                {page + 1}
              </ButtonPagin>
            );
          }
        })}

        <ButtonIconRound
          isDisabled={pageIndex === pageCount - 1}
          onClick={withScroll(nextPage)}
          aria-label="go next page"
          icon={<DropdownIcon transform={'rotate(-90deg)'} />}
        />
      </HStack>
    </HStack>
  );
};
