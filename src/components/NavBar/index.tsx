import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { useCollections } from '@/hooks/collections.hooks';
import ConfigTools from '@components/ConfigTools';
import NavButton from '../NavButton';
import {
  configTools,
  filmotekTitle,
  navBar,
  navButtons,
  navMainNav,
  navSecondaryNav
} from './navBar.styles';

export default function NavBar() {
  const { t } = useTranslation();
  useCollections();

  return (
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
      <div className={navSecondaryNav}>
        <div className={configTools}>
          <ConfigTools />
        </div>
        <div>Filtres - Tier par : date / titre original / titre français</div>
      </div>
    </nav>
  );
}
