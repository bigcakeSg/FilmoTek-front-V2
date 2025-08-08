import { useTranslation } from 'react-i18next';
import { MdMovie, MdMovieEdit } from 'react-icons/md';
import { BiSolidBarChartSquare } from 'react-icons/bi';
import ConfigTools from '@components/ConfigTools';
import NavButton from '@components/NavButton';
import {
  filmotekTitle,
  filters,
  movieCount,
  navBar,
  navButtons,
  navMainNav,
  navSecondaryNav,
  sortBy
} from './navBar.styles';
import { useGetMovieList } from '@/hooks/movies.hooks';
import useFilterSortStore, { SortName } from '@/stores/filterSort.store';

function FilterButton() {
  const { t } = useTranslation();

  const { data: moviesData } = useGetMovieList();
  const totalCount = moviesData?.pages[0].totalCount;
  const filteredCount = moviesData?.pages[0].filterCount;

  return (
    <>
      <button>{t('mainNav.openFilters')}</button>
      {moviesData && (
        <div className={movieCount}>
          <span className="filteredCount">{filteredCount}</span>{' '}
          {filteredCount !== totalCount && <> / {totalCount}</>} {t('movies')}
        </div>
      )}
    </>
  );
}

function SortButton({
  label,
  sortName
}: Readonly<{
  label: string;
  sortName: SortName;
}>) {
  const { sort, setSort } = useFilterSortStore();

  const handleSortChange = () => {
    const direction =
      sort.name === sortName && sort.direction === 'asc' ? 'desc' : 'asc';
    setSort({ name: sortName, direction });
  };

  return (
    <button onClick={handleSortChange}>
      {label}{' '}
      {sort.name === sortName && (
        <span>{sort.direction === 'asc' ? '↑' : '↓'}</span>
      )}
    </button>
  );
}

export default function NavBar() {
  const { t } = useTranslation();

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
        <div>
          <ConfigTools />
        </div>
        <div className={filters}>
          <FilterButton />
          <div className={sortBy}>
            {t('mainNav.sortBy')}
            <SortButton
              label={t('mainNav.releaseDate')}
              sortName="releaseDate"
            />
            <SortButton
              label={t('mainNav.originalTitle')}
              sortName="normalizedOriginalTitle"
            />
            <SortButton
              label={t('mainNav.frenchTitle')}
              sortName="normalizedFrenchTitle"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
