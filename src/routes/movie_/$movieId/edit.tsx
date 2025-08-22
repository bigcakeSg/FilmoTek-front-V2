import EditMovie from '@/components/EditMovie';
import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

const editMovieSchema = z.object({
  type: z.enum(['create', 'update'])
});

export const Route = createFileRoute('/movie_/$movieId/edit')({
  component: EditMoviePage,
  validateSearch: (search) => editMovieSchema.parse(search)
});

function EditMoviePage() {
  const { movieId } = Route.useParams();
  const { type } = Route.useSearch();

  return <EditMovie movieId={movieId} type={type} />;
}
