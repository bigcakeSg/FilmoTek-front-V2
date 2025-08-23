import { Pagination } from '@ark-ui/react/pagination';
import { useEffect, useState } from 'react';
import { pagination, paginationSelect } from './moviesPagination.styles';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { usePrefetchMovies } from '@/hooks/movies.hook';
import { useNavigation } from '@/hooks/navigation.hook';
import useRouteStore from '@/stores/route.store';
import { BiLeftArrow, BiRightArrow } from 'react-icons/bi';
import SelectComponent from '@/components/ui/SelectComponent';
import { useTranslation } from 'react-i18next';

interface MoviesPaginationProps {
  count: number | undefined;
  page?: number;
}

export default function MoviesPagination({
  count,
  page = 1
}: Readonly<MoviesPaginationProps>) {
  const { t } = useTranslation();
  const { moviesQueries } = useNavigation();
  const search = useSearch({ from: '/' });
  const navigate = useNavigate({ from: '/' });
  const { limit, setLimit } = useRouteStore();

  const { prefetchMovies } = usePrefetchMovies();

  const [currentPage, setCurrentPage] = useState(page);
  const [newCount, setNewCount] = useState(count);

  useEffect(() => {
    if (count) setNewCount(count);
  }, [count]);

  useEffect(() => {
    setCurrentPage(page);
  }, [page]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'ArrowLeft' && currentPage > 1) {
        const prevPage = currentPage - 1;
        navigate({
          search: { ...search, page: prevPage }
        });
        setCurrentPage(prevPage);
      } else if (
        event.key === 'ArrowRight' &&
        newCount &&
        currentPage < Math.ceil(newCount / limit)
      ) {
        const nextPage = currentPage + 1;
        navigate({
          search: { ...search, page: nextPage }
        });
        setCurrentPage(nextPage);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentPage, newCount, limit, search, navigate]);

  return (
    <div className={pagination}>
      <Pagination.Root
        count={newCount}
        pageSize={limit}
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
            const start = moviesQueries.start - limit;
            prefetchMovies({ ...moviesQueries, start });
          }}
        >
          <BiLeftArrow />
        </Pagination.PrevTrigger>
        <Pagination.Context>
          {(pagination) =>
            pagination.pages.map((page, index) =>
              page.type === 'page' ? (
                <Pagination.Item
                  key={`${page.type}-${page.value}`}
                  {...page}
                  onMouseEnter={() => {
                    prefetchMovies({
                      ...moviesQueries,
                      start: (page.value - 1) * limit
                    });
                  }}
                >
                  {page.value}
                </Pagination.Item>
              ) : (
                <Pagination.Ellipsis
                  key={`${page.type}-${index}`}
                  index={index}
                >
                  &#8230;
                </Pagination.Ellipsis>
              )
            )
          }
        </Pagination.Context>
        <Pagination.NextTrigger
          onMouseEnter={() => {
            const start = moviesQueries.start + limit;
            prefetchMovies({ ...moviesQueries, start });
          }}
        >
          <BiRightArrow />
        </Pagination.NextTrigger>
      </Pagination.Root>
      <div className={paginationSelect}>
        <span>{t('pagination.page')}</span>
        <SelectComponent
          options={[
            { label: '10', value: '10' },
            { label: '15', value: '15' },
            { label: '30', value: '30' },
            { label: '60', value: '60' },
            { label: '120', value: '120' }
          ]}
          value={`${limit}`}
          onChange={(items) => setLimit(+items[0].value)}
        />
      </div>
    </div>
  );
}
