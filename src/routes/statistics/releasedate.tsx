import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/statistics/releasedate')({
  component: RouteComponent
});

function RouteComponent() {
  return <div>Release date</div>;
}
