import { Link, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'; // TODO: remove this when not needed
import AuthProvider from '../AuthProvider';
import UserInfos from '../AuthProvider/UserInfos';
import { useTranslation } from 'react-i18next';
import ConfigTools from '../ConfigTools';
import { useCollections } from '@/hooks/collections.hooks';

export default function RootTemplate() {
  const { t } = useTranslation();
  useCollections();

  return (
    <>
      <nav>
        <Link to="/">{t('mainNav.home')}</Link>{' '}
        <Link to=".">{t('mainNav.addMovie')}</Link>{' '}
        <Link to="/statistics/genre">{t('mainNav.stats')}</Link>
        <ConfigTools />
      </nav>
      <AuthProvider>
        <UserInfos />
      </AuthProvider>
      <hr />
      <div>
        <Outlet />
      </div>
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
