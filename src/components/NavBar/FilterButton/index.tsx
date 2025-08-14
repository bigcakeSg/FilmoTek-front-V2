import { useGetMovieList } from '@/hooks/movies.hook';
import { useNavigation } from '@/hooks/navigation.hook';
import { useTranslation } from 'react-i18next';
import {
  filterButton,
  filterButtonContainer,
  movieCount
} from './filterButton.styles';
import useUiStore from '@/stores/ui.store';

export default function FilterButton() {
  const { t } = useTranslation();
  const { moviesQueries } = useNavigation();
  const { openTopPanel } = useUiStore();

  const { data: moviesData } = useGetMovieList(moviesQueries);

  const totalCount = moviesData?.totalCount;
  const filteredCount = moviesData?.filterCount;

  return (
    <div className={filterButtonContainer}>
      <button className={filterButton} onClick={openTopPanel}>
        {t('mainNav.openFilters')}
      </button>
      <div className={movieCount}>
        <span className="filteredCount">{filteredCount}</span>{' '}
        {filteredCount !== totalCount && <> / {totalCount}</>} {t('movies')}
      </div>
    </div>
  );
}
