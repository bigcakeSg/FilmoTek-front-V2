import { Dispatch, SetStateAction, useEffect } from 'react';
import noName from '@assets/noName.jpg';
import RightPanel from '@/components/ui/RightPanel';
import {
  useGetMovieListByGenre,
  useGetMovieListByName
} from '@/hooks/movies.hook';
import { Genre, Name } from '@/interfaces/movies.interfaces';
import MovieTilePanel from './MovieTilePanel';
import {
  moviePanelList,
  nameContainer,
  namePicture
} from './movieNamePanel.styles';
import { t } from 'i18next';
import MovieImdbLink from '../MovieImdbLink';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

interface MovieNamePanelProps {
  name: Name | null;
  setName: Dispatch<SetStateAction<Name | null>>;
  genre: Genre | null;
  setGenre: Dispatch<SetStateAction<Genre | null>>;
}

export default function MoviePanel({
  name,
  setName,
  genre,
  setGenre
}: Readonly<MovieNamePanelProps>) {
  const {
    data: nameMovies,
    refetch: refetchNameMovies,
    isFetching: isNameMoviesFetching
  } = useGetMovieListByName(name?.name._id || '');
  const {
    data: genreMovies,
    refetch: refetchGenreMovies,
    isFetching: isGenreMoviesFetching
  } = useGetMovieListByGenre(genre?._id || '');

  useEffect(() => {
    if (name?.name._id) refetchNameMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name?.name._id]);

  useEffect(() => {
    if (genre?._id) refetchGenreMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [genre?._id]);

  return (
    <RightPanel
      onClose={() => {
        setName(null);
        setGenre(null);
      }}
    >
      <div className={nameContainer}>
        {name && (
          <div className={namePicture}>
            <img
              src={
                name?.name.picture
                  ? `${BASE_URL}/media/portraits/${name?.name.picture}`
                  : noName
              }
              alt={name?.name.text}
            />
          </div>
        )}
        <div>
          <span className="name">
            {name?.name.text}
            {genre?.text}
            <br />
            {name && (
              <MovieImdbLink
                imdbIdLink={`https://www.imdb.com/fr/name/${name?.name.id}/?ref_=tt_ov_1_1`}
              />
            )}
          </span>
          {name && (
            <>
              <span className="count">{nameMovies?.data.length}</span>{' '}
              <span className="movie">
                {nameMovies?.data.length && nameMovies?.data.length <= 1
                  ? t('movie')
                  : t('movies')}
              </span>
            </>
          )}
          {genre && (
            <>
              <span className="count">{genreMovies?.data.length}</span>{' '}
              <span className="movie">
                {genreMovies?.data.length && genreMovies?.data.length <= 1
                  ? t('movie')
                  : t('movies')}
              </span>
            </>
          )}
        </div>
      </div>
      {/* TODO: loading */}
      {isNameMoviesFetching || isGenreMoviesFetching ? (
        <div>Loading...</div>
      ) : (
        <div className={moviePanelList}>
          {nameMovies
            ? nameMovies.data.map((movie) => (
                <MovieTilePanel
                  key={movie._id}
                  movie={movie}
                  nameId={name?.name._id}
                />
              ))
            : null}
          {genreMovies
            ? genreMovies.data.map((movie) => (
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
