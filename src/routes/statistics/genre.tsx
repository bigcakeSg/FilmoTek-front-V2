import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/statistics/genre')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Genre</div>;
}
