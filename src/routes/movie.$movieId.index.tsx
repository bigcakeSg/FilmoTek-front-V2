import Movie from '@pages/Movie';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const nameSearchSchema = z.object({
  name: z.string().optional()
});

export const Route = createFileRoute('/movie/$movieId/')({
  validateSearch: nameSearchSchema,
  component: Movie
});
