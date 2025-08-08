import { Pagination } from '@ark-ui/react/pagination';
import { useEffect, useState } from 'react';
import { pagination } from './moviesPagination.styles';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { usePrefetchMovies } from '@/hooks/movies.hook';
import { MOVIES_LIMIT, useNavigation } from '@/hooks/navigation.hook';

interface MoviesPaginationProps {
  count: number | undefined;
  page?: number;
}

export default function MoviesPagination({
  count,
  page = 1
}: Readonly<MoviesPaginationProps>) {
  const { moviesQueries } = useNavigation();
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
          console.log(search);
          navigate({
            search: { ...search, page: details.page }
          });
          setCurrentPage(details.page);
        }}
      >
        <Pagination.PrevTrigger
          onMouseEnter={() => {
            const start = moviesQueries.start - MOVIES_LIMIT;
            prefetchMovies({ ...moviesQueries, start });
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
                    console.log(moviesQueries);
                    prefetchMovies({
                      ...moviesQueries,
                      start: (page.value - 1) * MOVIES_LIMIT
                    });
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
            const start = moviesQueries.start + MOVIES_LIMIT;
            prefetchMovies({ ...moviesQueries, start });
          }}
        >
          Next Page
        </Pagination.NextTrigger>
      </Pagination.Root>
    </div>
  );
}
