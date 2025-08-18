import { createFileRoute } from '@tanstack/react-router';
import z from 'zod';
import Movies from '@/pages/Movies';
import { SortDirection, SortName } from '@/interfaces/filterSort.interface';

const moviesSearchSchema = z.object({
  page: z.number().optional(),
  filterBy: z.string().optional(),
  sortBy: z.custom<SortName>().optional(),
  direction: z.custom<SortDirection>().optional(),
  // filter: z.union([z.string(), z.array(z.string())]).optional()
  filter: z.array(z.string()).optional()
});

export const Route = createFileRoute('/')({
  component: Movies,
  validateSearch: (search) => moviesSearchSchema.parse(search)
});
