import { useState } from 'react';
import { useGetMovieDetail } from '@/hooks/movies.hook';
import { Route } from '@/routes/movie.$movieId.index';
import {
  movieBanner,
  movieDetail,
  movieDetailCast,
  movieDetailContainer,
  movieDetailContent,
  movieDetailInfos,
  movieDetailPicture,
  movieDetailPlot,
  movieDetailTitle
} from './movieDetail.styles';
import MoviePicture from './MoviePicture';
import MovieSupports from './MovieSupports';
import MoviePlot from './MoviePlot';
import MovieDetailTitle from './MovieDetailTitle';
import MovieGenres from './MovieGenres';
import MovieDetailCast from './MovieDetailCast';
import { Name } from '@/interfaces/movies.interfaces';
import MovieNamePanel from './MovieNamePanel';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export default function MovieDetail() {
  const movieId = Route.useParams().movieId;
  const { data, isFetching } = useGetMovieDetail(movieId);
  const [name, setName] = useState<Name | null>(null);

  if (isFetching) return <div>Loading...</div>; // TODO: loader

  if (!data) return <div>Movie not found</div>; // TODO: error page

  const backgroundImage =
    isFetching || !data.picture
      ? 'unset'
      : `url(${BASE_URL}/media/posters/${data.picture})`;

  return (
    <div className={movieDetail}>
      <div className={movieBanner}>
        <div
          className="movie-banner__image"
          style={{
            backgroundImage
          }}
        ></div>
        <div className="movie-banner__overlay"></div>
      </div>
      <div className={movieDetailContainer}>
        <div className={movieDetailContent}>
          <div className={movieDetailPicture}>
            <MoviePicture
              picture={data.picture}
              originalTitle={data.originalTitle}
            />
          </div>
          <div className={movieDetailInfos}>
            <MovieSupports supports={data.supports} />
            <MovieGenres genres={data.genres} />
          </div>
          <div className={movieDetailPlot}>
            <MoviePlot plot={data.plot} />
          </div>
          <div className={movieDetailTitle}>
            <MovieDetailTitle
              originalTitle={data.originalTitle}
              frenchTitle={data.frenchTitle}
              releaseDate={data.releaseDate}
              duration={data.duration}
            />
          </div>
          <div className={movieDetailCast}>
            <MovieDetailCast
              directors={data.directors}
              writers={data.writers}
              casting={data.casting}
              onSelectName={setName}
            />
          </div>
        </div>
      </div>
      <MovieNamePanel name={name} setName={setName} />
    </div>
  );
}
