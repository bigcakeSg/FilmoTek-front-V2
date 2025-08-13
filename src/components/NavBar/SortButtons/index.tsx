import { useTranslation } from 'react-i18next';
import { sortBy, sortByLabel } from './sortButtons.styles';
import SortButton from './SortButton';

export default function SortButtons() {
  const { t } = useTranslation();

  return (
    <div className={sortBy}>
      <span className={sortByLabel}>{t('mainNav.sortBy')}</span>
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
