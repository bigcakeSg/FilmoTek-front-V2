import { moviePoster } from './moviePicture.styles';

interface MoviePictureProps {
  picture: string;
  originalTitle: string;
}

const BASE_URL = import.meta.env.VITE_APP_API_BASE_URI;

export default function MoviePicture({
  picture,
  originalTitle
}: Readonly<MoviePictureProps>) {
  return (
    <img
      src={`${BASE_URL}/media/posters/${picture}`}
      alt={originalTitle}
      className={moviePoster}
    />
  );
}
