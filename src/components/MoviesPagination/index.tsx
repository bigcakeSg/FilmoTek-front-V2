import { Pagination } from '@ark-ui/react/pagination';
import { useEffect, useState } from 'react';
import { pagination } from './moviesPagination.styles';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { MOVIES_LIMIT } from '@/pages/Movies';
import { usePrefetchMovies } from '@/hooks/movies.hooks';

interface MoviesPaginationProps {
  count: number | undefined;
  page?: number;
}

export default function MoviesPagination({
  count,
  page = 1
}: Readonly<MoviesPaginationProps>) {
  const search = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });

  const { prefetchMovies } = usePrefetchMovies();

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
        <Pagination.PrevTrigger
          onMouseEnter={() => {
            prefetchMovies(
              currentPage - 1,
              MOVIES_LIMIT,
              search.sortBy || 'releaseDate',
              search.direction || 'asc'
            );
          }}
        >
          Previous
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item
                  key={index}
                  {...page}
                  onMouseEnter={() => {
                    prefetchMovies(
                      page.value,
                      MOVIES_LIMIT,
                      search.sortBy || 'releaseDate',
                      search.direction || 'asc'
                    );
                  }}
                >
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
        <Pagination.NextTrigger
          onMouseEnter={() => {
            prefetchMovies(
              currentPage + 1,
              MOVIES_LIMIT,
              search.sortBy || 'releaseDate',
              search.direction || 'asc'
            );
          }}
        >
          Next Page
        </Pagination.NextTrigger>
      </Pagination.Root>
    </div>
  );
}
