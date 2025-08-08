import { Pagination } from '@ark-ui/react/pagination';
import { useEffect, useState } from 'react';
import { pagination } from './paginationComponent.styles';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { MOVIES_LIMIT } from '@/pages/Movies';

interface PaginationComponentProps {
  count: number | undefined;
  page?: number;
}

export default function PaginationComponent({
  count,
  page = 1
}: Readonly<PaginationComponentProps>) {
  const search = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });
  const [currentPage, setCurrentPage] = useState(page);
  const [newCount, setNewCount] = useState(count);

  useEffect(() => {
    if (count) setNewCount(count);
  }, [count]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  return (
    <div className={pagination}>
      <Pagination.Root
        count={newCount}
        pageSize={MOVIES_LIMIT}
        siblingCount={2}
        page={currentPage}
        onPageChange={(details) => {
          navigate({
            search: { ...search, page: details.page }
          });
          setCurrentPage(details.page);
        }}
      >
        <Pagination.PrevTrigger>Previous</Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item key={index} {...page}>
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis key={index} index={index}>
                  &#8230;
                </Pagination.Ellipsis>
              )
            )
          }
        </Pagination.Context>
        <Pagination.NextTrigger>Next Page</Pagination.NextTrigger>
      </Pagination.Root>
    </div>
  );
}
