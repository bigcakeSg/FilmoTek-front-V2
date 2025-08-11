import { useGetMovieDetail } from '@/hooks/movies.hook';
import { Route } from '@/routes/movie.$movieId.index';
import {
  movieBanner,
  movieDetail,
  movieDetailCast,
  movieDetailContainer,
  movieDetailContent,
  movieDetailGenres,
  movieDetailInfos,
  movieDetailPicture,
  movieDetailPlot,
  movieDetailSupport,
  movieDetailTitle
} from './movieDetail.styles';
import vhs from '@assets/VHS_logo.svg';
import ld from '@assets/Laser_Disc.svg';
import dvd from '@assets/DVD_logo.svg';
import bd from '@assets/Blu-ray_Disc.svg';
import uhd from '@assets/4k-fullhd.svg';

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

function Supports() {
  const handleChangeVideoSupport = (support: string) => {
    console.log('SUPPORT:', support);
  };

  return (
    <div>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('vhs')}
      >
        <img src={vhs} style={{ height: '25px' }} alt="VHS" />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('dvd')}
      >
        <img src={dvd} style={{ height: '25px' }} alt="DVD" />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('ld')}
      >
        <img src={ld} style={{ height: '25px' }} alt="Laser Disc" />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('bluRay')}
      >
        <img src={bd} style={{ height: '25px' }} alt="Blu-ray" />
      </button>
      <button
        className={`support__video`}
        onClick={() => handleChangeVideoSupport('uhd')}
      >
        <img src={uhd} style={{ height: '25px' }} alt="4K UHD" />
      </button>
    </div>
  );
}

export default function MovieDetail() {
  const movieId = Route.useParams().movieId;
  const { data, isFetching } = useGetMovieDetail(movieId);

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
            <img
              src={`${BASE_URL}/media/posters/${data.picture}`}
              alt={data.originalTitle}
            />
          </div>
          <div className={movieDetailInfos}>
            <div className={movieDetailSupport}>
              <Supports />
            </div>
            <div className={movieDetailGenres}>
              {data.genres.map((genre) => (
                <div key={genre.id}>{genre.text}</div>
              ))}
            </div>
          </div>
          <div className={movieDetailPlot}>
            <h2>Plot</h2>
            {data.plot}
          </div>
          <div className={movieDetailTitle}>
            <div>{data.originalTitle}</div>
            <div>{data.frenchTitle}</div>
            <div>
              <div>{data.releaseDate}</div>
              <div>{data.duration}</div>
            </div>
          </div>
          <div className={movieDetailCast}>
            <div>
              <div>
                <span>Director(s):</span>{' '}
                <span>
                  {data.directors
                    .map((director) => director.name.text)
                    .join(', ')}
                </span>
              </div>
              <div>
                <span>Writer(s):</span>{' '}
                <span>
                  {data.writers.map((writer) => writer.name.text).join(', ')}
                </span>
              </div>
            </div>
            <div>
              <h2>Casting</h2>
              <div>
                {data.casting.principal.map((actor) => (
                  <div key={actor.name.id}>{actor.name.text}</div>
                ))}
              </div>
              <div>
                {data.casting.extended.map((actor) => (
                  <div key={actor.name.id}>{actor.name.text}</div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
