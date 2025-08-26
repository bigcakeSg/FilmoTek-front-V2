import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useGetMovieList } from '@/hooks/movies.hook';
import { moviesContainer, moviesContent, moviesScroll } from './movies.styles';
import MovieTile from './MovieTile';
import { movieTile } from './MovieTile/movieTile.styles';
import { useCollections } from '@/hooks/collections.hook';
import MoviesPagination from '@pages/MovieList/MoviesPagination';
import { useNavigation } from '@/hooks/navigation.hook';
import useRouteStore from '@/stores/route.store';
import { useLocation } from '@tanstack/react-router';
import { Filter, FilterName } from '@/interfaces/filterSort.interface';
import TopPanel from '@/components/ui/TopPanel';
import FiltersPanel from './FiltersPanel';
import { filtersMap } from './FiltersPanel/filters.helpers';

export default function Movies() {
  const { t } = useTranslation();
  const { moviesQueries } = useNavigation();
  const { setRoute } = useRouteStore();

  const location = useLocation();
  const { page, limit, sortBy, direction, filter } = location.search;

  const [dirtyFilters, setDirtyFilters] = useState<
    Record<string, string[] | undefined>
  >(filtersMap(location.search.filter || []));
  const [searchFilters, setSearchFilters] = useState<
    Record<string, string[] | undefined>
  >(filtersMap(location.search.filter || []));

  useEffect(() => {
    if (!location.searchStr) return;

    const filters: Filter[] =
      filter?.map((f) => {
        const [name, ...value] = f.split('+');
        return { name: name as FilterName, value: value.join() };
      }) || [];

    setRoute({
      ...(page ? { page } : {}),
      ...(limit ? { limit } : {}),
      ...(sortBy
        ? {
            sort: {
              name: sortBy,
              direction: direction ?? 'asc'
            }
          }
        : {}),
      ...(filters ? { filter: filters } : {})
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.searchStr]);

  const { data: collections } = useCollections();
  const { data: moviesData, isFetching } = useGetMovieList(moviesQueries);

  const collectionWatchedId = collections.find(
    (c) => c.name === 'collection.watched'
  )?._id;
  const collectionFavoriteId = collections.find(
    (c) => c.name === 'collection.favorite'
  )?._id;
  const collectionPinnedId = collections.find(
    (c) => c.name === 'collection.pinned'
  )?._id;

  return (
    <div className={moviesContainer}>
      <div className={moviesScroll}>
        <div className={moviesContent}>
          {/* TODO: loader : styles + afficher le bon nombre de tuiles */}
          {isFetching ? (
            Array.from({ length: 20 }).map((_, i) => (
              <div key={i} className={movieTile}>
                {t('loading')}
              </div>
            ))
          ) : (
            <>
              {moviesData?.data.map((movie) => (
                <MovieTile
                  key={movie._id}
                  {...movie}
                  watched={
                    collectionWatchedId
                      ? movie.collections.includes(collectionWatchedId)
                      : undefined
                  }
                  favorite={
                    collectionFavoriteId
                      ? movie.collections.includes(collectionFavoriteId)
                      : undefined
                  }
                  pinned={
                    collectionPinnedId
                      ? movie.collections.includes(collectionPinnedId)
                      : undefined
                  }
                />
              ))}
            </>
          )}
        </div>
      </div>
      <MoviesPagination
        count={moviesData?.filterCount}
        page={moviesQueries.start / moviesQueries.limit + 1}
      />
      <TopPanel onClose={() => setDirtyFilters(searchFilters)}>
        <FiltersPanel
          dirtyFilters={dirtyFilters}
          setDirtyFilters={setDirtyFilters}
          searchFilters={searchFilters}
          setSearchFilters={setSearchFilters}
        />
      </TopPanel>
    </div>
  );
}
