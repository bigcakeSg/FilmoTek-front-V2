import { Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'; // TODO: remove this when not needed
import { useCollections } from '@hooks/collections.hook';
import NavBar from '@components/NavBar';
import { rootContent, rootFooter, rootTemplate } from './rootTemplate.styles';
import ModalComponent from '@components/ui/ModalComponent';
import ToasterComponent from '../ui/ToasterComponent';

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
      <footer className={rootFooter}>
        <div>FilmoTek v2.0 - © 2025</div>
      </footer>
      <ModalComponent />
      <ToasterComponent />
      {/* <TanStackRouterDevtools /> */}
    </div>
  );
}
