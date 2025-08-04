import { Link, Outlet } from '@tanstack/react-router';
// import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import AuthProvider from '../AuthProvider';
import UserInfos from '../AuthProvider/UserInfos';
import { useTranslation } from 'react-i18next';

export default function RootTemplate() {
  const { i18n, t } = useTranslation();

  const changeLanguageHandler = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'fr' : 'en');
  };

  return (
    <>
      <nav>
        <Link to="/">{t('mainNav.home')}</Link>{' '}
        <Link to=".">{t('mainNav.addMovie')}</Link>{' '}
        <Link to="/statistics/genre">{t('mainNav.stats')}</Link>
        <button onClick={changeLanguageHandler}>Lang</button>
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
