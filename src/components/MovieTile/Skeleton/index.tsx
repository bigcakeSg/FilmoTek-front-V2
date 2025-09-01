import { useTranslation } from 'react-i18next';
import { RiMovie2Fill } from 'react-icons/ri';
import { tileSketeton } from './skeleton.styles';

export default function Skeleton() {
  const { t } = useTranslation();

  return (
    <div className={tileSketeton}>
      <RiMovie2Fill className="skeleton-icon" />
      <div className="skeleton-text">{t('loading')}</div>
    </div>
  );
}
