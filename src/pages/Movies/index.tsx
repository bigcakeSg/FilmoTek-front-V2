import { useRef } from 'react';
import { useGetMovieList } from '@/hooks/movies.hooks';
import { moviesContainer, moviesContent } from './movies.styles';
import MovieTile from '@components/MovieTile';
import { useTranslation } from 'react-i18next';
import { movieTile } from '@/components/MovieTile/movieTile.styles';
import { useCollections } from '@/hooks/collections.hooks';
import { useSearch } from '@tanstack/react-router';
import MoviesPagination from '@/components/MoviesPagination';

export const MOVIES_LIMIT = 20;

export default function Movies() {
  const { t } = useTranslation();

  const search = useSearch({ from: '/' });
  const { page = 0, sortBy = 'releaseDate', direction = 'asc' } = search;

  const containerRef = useRef<HTMLDivElement>(null);

  const { data: collections } = useCollections();
  const { data: moviesData, isFetching } = useGetMovieList(
    page,
    MOVIES_LIMIT,
    sortBy,
    direction
  );

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
    <div ref={containerRef} className={moviesContainer}>
      <MoviesPagination count={moviesData?.filterCount} page={page} />
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
  );
}
