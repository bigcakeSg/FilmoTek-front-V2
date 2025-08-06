import { Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'; // TODO: remove this when not needed
import { useCollections } from '@/hooks/collections.hooks';
import NavBar from '@components/NavBar';

export default function RootTemplate() {
  useCollections();

  return (
    <>
      <NavBar />
      <div>
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
