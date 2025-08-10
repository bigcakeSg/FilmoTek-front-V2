import { useGetMovieList } from '@/hooks/movies.hook';
import { moviesContainer, moviesContent, moviesScroll } from './movies.styles';
import MovieTile from '@components/MovieTile';
import { useTranslation } from 'react-i18next';
import { movieTile } from '@/components/MovieTile/movieTile.styles';
import { useCollections } from '@/hooks/collections.hook';
import MoviesPagination from '@/components/MoviesPagination';
import { useNavigation } from '@/hooks/navigation.hook';
import useRouteStore from '@/stores/route.store';
import { useLocation } from '@tanstack/react-router';
import { Filter, FilterName } from '@/interfaces/filterSort.interface';
import { useEffect } from 'react';

export default function Movies() {
  const { t } = useTranslation();
  const { moviesQueries } = useNavigation();
  const { setRoute } = useRouteStore();

  const location = useLocation();
  const { page, sortBy, direction, filter } = location.search;

  useEffect(() => {
    if (!location.searchStr) return;

    let filters: Filter | Filter[] = [];
    if (typeof filter === 'string') {
      const [name, ...value] = filter.split('+');
      filters = [{ name: name as FilterName, value: value.join() }];
    } else if (Array.isArray(filter)) {
      filters = filter?.map((f) => {
        const [name, ...value] = f.split('+');
        return { name: name as FilterName, value: value.join() };
      });
    }
    setRoute({
      ...(page ? { page: page ?? 1 } : {}),
      ...(sortBy
        ? {
            sort: {
              name: sortBy,
              direction: direction ?? 'asc'
            }
          }
        : {}),
      ...(filters.length ? { filter: filters } : {})
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
      <div>
        <MoviesPagination
          count={moviesData?.filterCount}
          page={moviesQueries.start / moviesQueries.limit + 1}
        />
      </div>
    </div>
  );
}
