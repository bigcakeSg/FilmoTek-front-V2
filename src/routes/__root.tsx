import type { QueryClient } from '@tanstack/react-query';
import {
  createRootRouteWithContext,
  Link,
  Outlet
} from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootComponent,
  notFoundComponent: () => <>Not Found</>
});

function RootComponent() {
  return (
    <>
      <div>
        <Link to="/" search={{ page: 1 }}>
          Home
        </Link>{' '}
        <Link to="/movie/$movieId" params={{ movieId: '1234' }}>
          Movie
        </Link>{' '}
        <Link to="/statistics/genre">Stats</Link>
      </div>
      <hr />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  );
}
