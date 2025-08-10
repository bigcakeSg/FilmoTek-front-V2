import { useTranslation } from 'react-i18next';
import { sortBy } from './sortButtons.styles';
import SortButton from './SortButton';

export default function SortButtons() {
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
