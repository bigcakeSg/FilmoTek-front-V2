import { useState } from 'react';
import {
  movieBanner,
  movieDetail,
  movieDetailCast,
  movieDetailContainer,
  movieDetailContent,
  movieDetailInfos,
  movieDetailPicture,
  movieDetailPlot,
  movieDetailTitle,
  movieVideos
} from './movieDetail.styles';
import MoviePicture from './MoviePicture';
import MovieSupports from './MovieSupports';
import MoviePlot from './MoviePlot';
import MovieDetailTitle from './MovieDetailTitle';
import MovieGenres from './MovieGenres';
import MovieDetailCast from './MovieDetailCast';
import { Movie, Name } from '@/interfaces/movies.interfaces';
import MovieNamePanel from './MovieNamePanel';
import MovieVideo from './MovieVideo';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

interface MovieDetailProps {
  movieData: Movie | undefined;
  isFetching: boolean;
}

export default function MovieDetail({
  movieData,
  isFetching
}: Readonly<MovieDetailProps>) {
  const [name, setName] = useState<Name | null>(null);

  if (isFetching) return <div>Loading...</div>; // TODO: loader

  if (!movieData) return <div>Movie not found</div>; // TODO: error page

  const backgroundImage =
    isFetching || !movieData.picture
      ? 'unset'
      : `url(${BASE_URL}/media/posters/${movieData.picture})`;

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
              picture={movieData.picture}
              originalTitle={movieData.originalTitle}
            />
          </div>
          <div className={movieDetailInfos}>
            <MovieSupports
              movieId={movieData._id}
              supports={movieData.supports}
            />
            <MovieGenres genres={movieData.genres} />
          </div>
          <div className={movieDetailPlot}>
            <MoviePlot plot={movieData.plot} />
          </div>
          <div className={movieDetailTitle}>
            <MovieDetailTitle
              originalTitle={movieData.originalTitle}
              frenchTitle={movieData.frenchTitle}
              releaseDate={movieData.releaseDate}
              duration={movieData.duration}
              countries={movieData.countriesOfOrigin}
              companies={movieData.companies}
            />
          </div>
          <div className={movieDetailCast}>
            <MovieDetailCast
              directors={movieData.casting.filter(
                (cast) => cast.job === 'director'
              )}
              writers={movieData.casting.filter(
                (cast) => cast.job === 'writer'
              )}
              casting={movieData.casting.filter(
                (cast) => cast.job === 'actor' || cast.job === 'actress'
              )}
              crew={movieData.casting.filter(
                (cast) =>
                  cast.job !== 'actor' &&
                  cast.job !== 'actress' &&
                  cast.job !== 'director' &&
                  cast.job !== 'writer'
              )}
              onSelectName={setName}
            />
            {!!movieData.videos.filter((video) => video !== null).length && (
              <div className={movieVideos}>
                {movieData.videos.map((video) => (
                  <MovieVideo key={video} video={video} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <MovieNamePanel name={name} setName={setName} />
    </div>
  );
}
