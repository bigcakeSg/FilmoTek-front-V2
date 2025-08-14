import RightPanel from '@/components/ui/RightPanel';
import { useGetMovieListByName } from '@/hooks/movies.hook';
import { Name } from '@/interfaces/movies.interfaces';
import { Dispatch, SetStateAction, useEffect } from 'react';
import MovieTilePanel from './MovieTilePanel';
import { moviePanelList, nameMovies } from './movieNamePanel.styles';
import { t } from 'i18next';

interface MovieNamePanelProps {
  name: Name | null;
  setName: Dispatch<SetStateAction<Name | null>>;
}

export default function MovieNamePanel({
  name,
  setName
}: Readonly<MovieNamePanelProps>) {
  const { data, refetch, isFetching } = useGetMovieListByName(
    name?.name._id || ''
  );

  useEffect(() => {
    if (name?.name._id) refetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name?.name._id]);

  return (
    <RightPanel onClose={() => setName(null)}>
      <div className={nameMovies}>
        <span className="name">
          {name?.name.text}
          <br />
        </span>
        <span className="count">{data?.data.length}</span>{' '}
        <span className="movie">
          {data?.data.length && data?.data.length <= 1
            ? t('movie')
            : t('movies')}
        </span>
      </div>
      {/* TODO: loading */}
      {isFetching ? (
        <div>Loading...</div>
      ) : (
        <div className={moviePanelList}>
          {data
            ? data.data.map((movie) => (
                <MovieTilePanel
                  key={movie._id}
                  movie={movie}
                  nameId={name?.name._id}
                />
              ))
            : null}
        </div>
      )}
    </RightPanel>
  );
}
