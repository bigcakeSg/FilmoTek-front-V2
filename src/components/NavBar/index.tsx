import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { useCollections } from '@/hooks/collections.hooks';
import ConfigTools from '@components/ConfigTools';
import AuthProvider from '@components/AuthProvider';
import UserInfos from '@components/AuthProvider/UserInfos';
import NavButton from '../NavButton';
import {
  configTools,
  filmotekTitle,
  navBar,
  navButtons,
  navMainNav
} from './navBar.styles';

export default function NavBar() {
  const { t } = useTranslation();
  useCollections();

  return (
    <>
      <nav className={navBar}>
        <div className={navMainNav}>
          <div className={filmotekTitle}>
            <span className="filmo">Filmo</span>
            <span className="tek">TEK</span>
          </div>
          <div className={navButtons}>
            <NavButton
              to="/"
              label={t('mainNav.movieList')}
              icon={<MdMovie />}
              tootltipMessage={t('mainNav.movieListTooltip')}
            />
            <NavButton
              to="."
              label={t('mainNav.addMovie')}
              icon={<MdMovieEdit />}
              tootltipMessage={t('mainNav.addMovieTooltip')}
            />
            <NavButton
              to="/statistics/genre"
              label={t('mainNav.stats')}
              icon={<BiSolidBarChartSquare />}
              tootltipMessage={t('mainNav.statsTooltip')}
            />
          </div>
        </div>
        <div className={configTools}>
          <ConfigTools />
        </div>
      </nav>
      <AuthProvider>
        <UserInfos />
      </AuthProvider>
      <hr />
    </>
  );
}
