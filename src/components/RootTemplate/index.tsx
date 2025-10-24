import { Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'; // TODO: remove this when not needed
import { useCollections } from '@hooks/collections.hook';
import NavBar from '@components/NavBar';
import { rootContent, rootFooter, rootTemplate } from './rootTemplate.styles';
import ModalComponent from '@components/ui/ModalComponent';
import ToasterComponent from '../ui/ToasterComponent';
import useColorModeStore from '@/stores/colorMode.store';
import { useEffect } from 'react';

export default function RootTemplate() {
  useCollections();
  const { colorMode } = useColorModeStore();

  useEffect(() => {
    document.documentElement.setAttribute('data-color-mode', colorMode);
    const meta = document.querySelector('meta[name="color-scheme"]');
    if (meta) {
      meta.setAttribute('content', colorMode);
    }
  }, [colorMode]);

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
