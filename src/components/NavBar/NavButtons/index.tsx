import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import { navButtons } from './navButtons.sttyles';
import NavButton from './NavButton';
import useRouteStore from '@/stores/route.store';
import PopoverComponent from '@/components/ui/PopoverComponent';

export default function NavButtons() {
  const { t } = useTranslation();
  const { page, sort, filter } = useRouteStore();

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
      <PopoverComponent
        trigger={
          <NavButton
            label={t('mainNav.addMovie')}
            icon={<MdMovieEdit />}
            tootltipMessage={t('mainNav.addMovieTooltip')}
          />
        }
      >
        <div></div>
      </PopoverComponent>
      <NavButton
        to="/statistics/genre"
        label={t('mainNav.stats')}
        icon={<BiSolidBarChartSquare />}
        tootltipMessage={t('mainNav.statsTooltip')}
      />
    </div>
  );
}
