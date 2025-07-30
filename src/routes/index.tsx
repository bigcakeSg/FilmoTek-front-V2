import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';
import Movies from '@/pages/Movies';

const moviesSearchSchema = z.object({
  page: z.number().optional()
});

export const Route = createFileRoute('/')({
  component: Movies,
  validateSearch: (search) => moviesSearchSchema.parse(search)
});
