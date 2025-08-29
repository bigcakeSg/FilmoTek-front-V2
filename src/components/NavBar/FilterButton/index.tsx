import { useTranslation } from 'react-i18next';
import { IoClose } from 'react-icons/io5';
import { useGetMovieList } from '@hooks/movies.hook';
import { useNavigation } from '@hooks/navigation.hook';
import {
  filterButton,
  filterButtonContainer,
  movieCount,
  resetFilters
} from './filterButton.styles';
import useUiStore from '@stores/ui.store';
import { useNavigate } from '@tanstack/react-router';
import TooltipComponent from '@/components/ui/TooltipComponent';

export default function FilterButton() {
  const { t } = useTranslation();
  const navigate = useNavigate({ from: '/' });
  const { moviesQueries, isMovieFilter } = useNavigation();
  const { openTopPanel } = useUiStore();

  const { data: moviesData } = useGetMovieList(moviesQueries);

  const totalCount = moviesData?.totalCount;
  const filteredCount = moviesData?.filterCount;

  const handleResetFilters = () => {
    navigate({ to: '/', search: { ...moviesQueries, filter: ['title+'] } });
  };

  return (
    <div className={filterButtonContainer}>
      <button className={filterButton} onClick={openTopPanel}>
        {t('mainNav.openFilters')}
      </button>
      <div className={movieCount}>
        <div>
          <span className="filteredCount">{filteredCount}</span>{' '}
          {filteredCount !== totalCount && <> / {totalCount}</>} {t('movies')}
        </div>
        {isMovieFilter && (
          <TooltipComponent message={t('filters.resetFilters')}>
            <div
              role="button"
              tabIndex={0}
              className={resetFilters}
              onClick={handleResetFilters}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  handleResetFilters();
                }
              }}
            >
              <IoClose />
            </div>
          </TooltipComponent>
        )}
      </div>
    </div>
  );
}
