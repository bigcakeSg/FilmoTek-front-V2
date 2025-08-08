import { Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'; // TODO: remove this when not needed
import { useCollections } from '@/hooks/collections.hook';
import NavBar from '@components/NavBar';
import { rootContent, rootFooter, rootTemplate } from './rootTemplate.styles';

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
        {/* TODO: faire les styles */}
        <div className={rootFooter}>FilmoTek v2.0 - © 2025</div>
      </footer>
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
