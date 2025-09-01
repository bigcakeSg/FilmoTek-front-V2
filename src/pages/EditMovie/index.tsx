import EditMovieForm from '@components/EditMovieForm';
import { Route } from '@routes/movie_/$movieId/edit';

export default function EditMovie() {
  const { movieId } = Route.useParams();
  const { type } = Route.useSearch();

  return <EditMovieForm movieId={movieId} type={type} />;
}
