import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { navButtons } from './navButtons.sttyles';
import NavButton from './NavButton';
import useRouteStore from '@/stores/route.store';
import AddMovie from '@/components/AddMovie';
import useUiStore from '@/stores/ui.store';

export default function NavButtons() {
  const { t } = useTranslation();
  const { page, sort, filter } = useRouteStore();
  const { openModal } = useUiStore();

  return (
    <div className={navButtons}>
      <NavButton
        to="/"
        searchParams={{
          page,
          sortBy: sort.name,
          direction: sort.direction,
          filter: filter.map((f) => `${f.name}+${f.value}`)
        }}
        label={t('mainNav.movieList')}
        icon={<MdMovie />}
        tootltipMessage={t('mainNav.movieListTooltip')}
      />
      <NavButton
        label={t('mainNav.addMovie')}
        icon={<MdMovieEdit />}
        tootltipMessage={t('mainNav.addMovieTooltip')}
        onClick={() =>
          openModal({
            title: (
              <div
                style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
              >
                <MdMovieEdit /> {t('mainNav.addMovie')}
              </div>
            ),
            content: <AddMovie />
          })
        }
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
