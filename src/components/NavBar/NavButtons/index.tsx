import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { navButtons } from './navButtons.sttyles';
import NavButton from './NavButton';

export default function NavButtons() {
  const { t } = useTranslation();

  return (
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
  );
}
