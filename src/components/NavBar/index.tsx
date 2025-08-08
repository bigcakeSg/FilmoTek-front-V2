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
import { useQueryClient } from '@tanstack/react-query';
import { MovieLite } from '@/interfaces/movies.interfaces';
import { ResultQuery } from '@/interfaces/queries.interfaces';
import { useNavigate, useSearch } from '@tanstack/react-router';
import { SortName } from '@/interfaces/filterSort.interface';
import { MOVIES_LIMIT } from '@/pages/Movies';

function FilterButton() {
  const { t } = useTranslation();
  const queryClient = useQueryClient();

  const search = useSearch({ from: '/' });
  const { page = 0, sortBy = 'releaseDate', direction = 'asc' } = search;
  const queryKey = ['movieList', page, MOVIES_LIMIT, sortBy, direction];

  const moviesData: ResultQuery<MovieLite> | undefined =
    queryClient.getQueryData(queryKey);

  const totalCount = moviesData?.totalCount;
  const filteredCount = moviesData?.filterCount;

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
  const navigate = useNavigate({ from: '/' });
  // const { sortBy = 'releaseDate', direction = 'asc' } = useSearch({
  const search = useSearch({
    from: '/'
  });

  const actualSortBy = search.sortBy || 'releaseDate';
  const actualDirection = search.direction || 'asc';

  const handleSortChange = () => {
    const newDirection =
      actualSortBy === sortName && actualDirection === 'asc' ? 'desc' : 'asc';
    navigate({
      search: { ...search, sortBy: sortName, direction: newDirection }
    });
  };

  return (
    <button onClick={handleSortChange}>
      {label}{' '}
      {actualSortBy === sortName && (
        <span>{actualDirection === 'desc' ? '↓' : '↑'}</span>
      )}
    </button>
  );
}

function SortButtons() {
  const { t } = useTranslation();

  return (
    <div className={sortBy}>
      {t('mainNav.sortBy')}
      <SortButton label={t('mainNav.releaseDate')} sortName="releaseDate" />
      <SortButton
        label={t('mainNav.originalTitle')}
        sortName="normalizedOriginalTitle"
      />
      <SortButton
        label={t('mainNav.frenchTitle')}
        sortName="normalizedFrenchTitle"
      />
    </div>
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
          <SortButtons />
        </div>
      </div>
    </nav>
  );
}
