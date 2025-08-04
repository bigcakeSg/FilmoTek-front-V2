import { Link, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AuthProvider from '../AuthProvider';
import UserInfos from '../AuthProvider/UserInfos';
import { useTranslation } from 'react-i18next';
import ConfigTools from '../ConfigTools';

export default function RootTemplate() {
  const { t } = useTranslation();

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
      <Outlet />
      {/* <TanStackRouterDevtools /> */}
    </>
  );
}
