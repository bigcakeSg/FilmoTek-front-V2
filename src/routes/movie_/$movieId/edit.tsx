import EditMovie from '@/pages/EditMovie';
import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';

const editMovieSchema = z.object({
  type: z.enum(['create', 'update'])
});

export const Route = createFileRoute('/movie_/$movieId/edit')({
  component: EditMovie,
  validateSearch: (search) => editMovieSchema.parse(search)
});
