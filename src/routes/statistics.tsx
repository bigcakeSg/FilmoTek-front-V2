import { createFileRoute, Link, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/statistics')({
  component: RouteComponent
});

function RouteComponent() {
  return (
    <>
      <h1>Statistics</h1>
      <Link to="/statistics/genre">Genres</Link>{' '}
      <Link to="/statistics/releasedate">Release Dates</Link>
      <Outlet />
    </>
  );
}
