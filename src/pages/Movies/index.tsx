import { useGetMovieList } from '@/hooks/movies.hook';
import { moviesContainer, moviesContent } from './movies.styles';
import MovieTile from '@components/MovieTile';
import { useTranslation } from 'react-i18next';
import { movieTile } from '@/components/MovieTile/movieTile.styles';
import { useCollections } from '@/hooks/collections.hook';
import MoviesPagination from '@/components/MoviesPagination';
import { useNavigation } from '@/hooks/navigation.hook';

export default function Movies() {
  const { t } = useTranslation();
  const { moviesQueries } = useNavigation();

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
      <MoviesPagination
        count={moviesData?.filterCount}
        page={moviesQueries.start / moviesQueries.limit + 1}
      />
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
