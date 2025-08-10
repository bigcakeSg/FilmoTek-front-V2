import { useGetMovieList } from '@/hooks/movies.hook';
import { useNavigation } from '@/hooks/navigation.hook';
import { useTranslation } from 'react-i18next';
import { movieCount } from './filterButton.styles';

export default function FilterButton() {
  const { t } = useTranslation();
  const { moviesQueries } = useNavigation();

  const { data: moviesData } = useGetMovieList(moviesQueries);

  const totalCount = moviesData?.totalCount;
  const filteredCount = moviesData?.filterCount;

  return (
    <>
      <button>{t('mainNav.openFilters')}</button>
      <div className={movieCount}>
        <span className="filteredCount">{filteredCount}</span>{' '}
        {filteredCount !== totalCount && <> / {totalCount}</>} {t('movies')}
      </div>
    </>
  );
}
