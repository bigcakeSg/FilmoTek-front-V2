import { Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'; // TODO: remove this when not needed
import { useCollections } from '@/hooks/collections.hooks';
import NavBar from '@components/NavBar';
import { rootContent, rootTemplate } from './rootTemplate.styles';

export default function RootTemplate() {
  useCollections();

  return (
    <div className={rootTemplate}>
      <header>
        <NavBar />
      </header>
      <div className={rootContent}>
        <Outlet />
      </div>
      <footer>
        <div style={{ height: '30px' }}>FilmoTek - © 2025</div>
      </footer>
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
