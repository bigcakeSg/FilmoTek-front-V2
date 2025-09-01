import { useRole } from '@hooks/auth.hook';
import EditMovie from '@pages/EditMovie';
import NotFound from '@pages/NotFound';
import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

const editMovieSchema = z.object({
  type: z.enum(['create', 'update'])
});

export const Route = createFileRoute('/movie_/$movieId/edit')({
  component: EditMovieRoute,
  validateSearch: (search) => editMovieSchema.parse(search)
});

function EditMovieRoute() {
  const { isAdmin } = useRole();

  if (!isAdmin) return <NotFound />;
  return <EditMovie />;
}
