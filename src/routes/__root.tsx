import type { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext } from '@tanstack/react-router';
import RootTemplate from '@/components/RootTemplate';
import NotFound from '@pages/NotFound';

export const Route = createRootRouteWithContext<{
  queryClient: QueryClient;
}>()({
  component: RootTemplate,
  notFoundComponent: () => <NotFound />
});
