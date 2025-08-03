import MovieDetail from '@/pages/MovieDetail';
import { createFileRoute } from '@tanstack/react-router';
import { z } from 'zod';

const nameSearchSchema = z.object({
  name: z.string().optional()
});

export const Route = createFileRoute('/movie/$movieId/')({
  // loader: ({ context: { queryClient }, params: { movieId } }) => {
  //   return queryClient.ensureQueryData(movieQuery(movieId));
  // },
  validateSearch: nameSearchSchema,
  component: MovieDetail
});
