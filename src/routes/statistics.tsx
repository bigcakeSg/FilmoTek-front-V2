import Statistics from '@/pages/Statistics';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/statistics')({
  component: Statistics
});
